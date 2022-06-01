import jwt_decode from "jwt-decode";
import { isBrowser } from "@src/helpers/utils";
import type { LoginRespone, AuthStore, TokenData } from "./types";

/**
 * Store auth data in local storage
 * @param response
 */
export const storeAuth = (response: LoginRespone) => {
  const { login } = response;

  if (login) {
    const {
      authToken,
      refreshToken,
      user: { id },
    } = login;
    const authStore: AuthStore = {
      authToken,
      refreshToken,
      id,
    };

    isBrowser() && localStorage.setItem("auth", JSON.stringify(authStore));
  } else {
    throw new Error("Login data is propably null");
  }
};

/**
 * Get auth store form local storage.
 * @returns
 */
export const getAuth = () => {
  const encodedAuth = isBrowser() ? localStorage.getItem("auth") : null;

  if (encodedAuth) {
    const authStore = JSON.parse(encodedAuth) as AuthStore;

    if ("authToken" in authStore && "refreshToken" in authStore) {
      return authStore;
    } else {
      throw new Error("Broken auth store");
    }
  } else {
    return;
  }
};

/**
 * Decode JWT token.
 * @param token
 * @returns
 */
export const decodeToken = (token: string) => jwt_decode<TokenData | null>(token);

/**
 * Check if token is expired.
 * @param expTimestamp
 * @returns
 */
export const isPHPTimestampExpired = (expTimestamp: number) => {
  const currentTimestamp = Date.now();
  const expInSeconds = expTimestamp * 1000;

  return currentTimestamp > expInSeconds;
}
