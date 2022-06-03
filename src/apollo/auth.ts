import jwt_decode from "jwt-decode";
import { client } from "./client";
import * as storageHelpers from "./storageHelpers";
import { REFRESH_TOKEN } from "@src/mutations/refreshToken";
import { gqlToString, rawGqlQuery } from "@src/apollo/utils";
import { arePropertiesNonFalsy } from "@src/helpers/utils";
import type {
  LoginRespone,
  AuthStore,
  TokenData,
  RefreshTokenData,
} from "./types";

/**
 * Convert login response to AuthStore.
 * @param response
 * @returns
 */
export const loginResponseToAuthStore = (response: LoginRespone): AuthStore => {
  const { login } = response;

  if (login) {
    const {
      authToken,
      refreshToken,
      user: { id },
    } = login;

    return {
      authToken,
      refreshToken,
      id,
    };
  } else {
    throw new Error("Login data is propably null");
  }
};

/**
 * Store auth data in local storage
 * @param response
 */
export const storeAuth = (store: AuthStore) => {
  storageHelpers.storeAuthToken(store.authToken);
  storageHelpers.storeRefreshToken(store.refreshToken);
  storageHelpers.storeUserId(store.id);
};

/**
 * Get auth store form local storage.
 * @returns
 */
export const getAuthStore = () => {
  const store = {
    [`${storageHelpers.AUTH_TOKEN_KEY}`]: storageHelpers.getAuthToken(),
    [`${storageHelpers.REFRESH_TOKEN_KEY}`]: storageHelpers.getRefreshToken(),
    [`${storageHelpers.USER_ID_KEY}`]: storageHelpers.getUserId(),
  };

  if (
    arePropertiesNonFalsy(
      store,
      storageHelpers.AUTH_TOKEN_KEY,
      storageHelpers.REFRESH_TOKEN_KEY,
      storageHelpers.USER_ID_KEY
    )
  ) {
    return store as AuthStore;
  }

  return false;
};

/**
 * Decode JWT token.
 * @param token
 * @returns
 */
export const decodeToken = (token: string) =>
  jwt_decode<TokenData | null>(token);

/**
 * Check if token is expired.
 * @param expTimestamp
 * @returns
 */
export const isPHPTimestampExpired = (expTimestamp: number) => {
  const currentTimestamp = Date.now();
  const expInSeconds = expTimestamp * 1000;

  return currentTimestamp > expInSeconds;
};

/**
 * Request refreshed token.
 * @param url
 * @param refreshToken
 * @param id
 * @returns
 */
export const refreshAuthToken = async (
  url: string,
  refreshToken: string,
  id: string
) => {
  const query = gqlToString(REFRESH_TOKEN);

  return await rawGqlQuery<RefreshTokenData>(url, query!, {
    id,
    refreshToken,
  });
};

/**
 * Destroy auth data & refetch.
 */
export const logOut = () => {
  storageHelpers.removeAuthToken();
  storageHelpers.removeRefreshToken();
  storageHelpers.removeUserId();
  return client.resetStore();
}
