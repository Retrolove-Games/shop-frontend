import type { LoginRespone, AuthStore } from "./types";

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

    localStorage.setItem("auth", JSON.stringify(authStore));
  } else {
    throw new Error("Login data is propably null");
  }
};

/**
 * Get auth store form local storage.
 * @returns
 */
export const getAuth = () => {
  const encodedAuth = localStorage.getItem("auth");

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
