import { isBrowser } from "@src/helpers/utils";

export const AUTH_TOKEN_KEY = "authToken";
export const REFRESH_TOKEN_KEY = "refreshToken";
export const USER_ID_KEY = "userId";
export const WOO_SESS_KEY = "wooSession";

// Storage helpers

// Setters
export const storeAuthToken = (authToken: string) =>
  isBrowser() && localStorage.setItem(AUTH_TOKEN_KEY, authToken);

export const storeRefreshToken = (refreshToken: string) =>
  isBrowser() && localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

export const storeUserId = (userId: string) =>
  isBrowser() && localStorage.setItem(USER_ID_KEY, userId);

export const setWooSession = (sessionId: string) =>
  isBrowser() && sessionStorage.setItem(WOO_SESS_KEY, sessionId);

// Getters
export const getAuthToken = () =>
  isBrowser() && localStorage.getItem(AUTH_TOKEN_KEY);

export const getRefreshToken = () =>
  isBrowser() && localStorage.getItem(REFRESH_TOKEN_KEY);

export const getUserId = () =>
  isBrowser() && localStorage.getItem(USER_ID_KEY);

export const getWooSession = () =>
  isBrowser() && sessionStorage.getItem(WOO_SESS_KEY);

// Cleanup
export const removeAuthToken = () =>
  isBrowser() && localStorage.removeItem(AUTH_TOKEN_KEY);

export const removeRefreshToken  = () =>
  isBrowser() && localStorage.removeItem(REFRESH_TOKEN_KEY);

export const removeUserId = () =>
  isBrowser() && localStorage.removeItem(USER_ID_KEY);

export const removeWooSession = () =>
  isBrowser() && sessionStorage.removeItem(WOO_SESS_KEY);


