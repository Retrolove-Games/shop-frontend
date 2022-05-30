export const isBrowser = () => typeof window !== "undefined";

export const isEmpty = (check: any) => {
  if (check === undefined || check === null) {
    return true;
  }

  if (check.constructor === Object && Object.entries(check).length === 0) {
    return true;
  }

  return false;
}
