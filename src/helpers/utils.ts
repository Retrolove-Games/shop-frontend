export const isBrowser = () => typeof window !== "undefined";

/**
 * Check if all wanted properties are non falsy.
 * @param obj
 * @param filter
 * @returns
 */
export const arePropertiesNonFalsy = (
  obj: Record<any, any>,
  ...filter: string[]
) => {
  return Object.entries(obj)
    .filter((arr) => filter.includes(arr[0]))
    .every((arr) => !!arr[1]);
};
