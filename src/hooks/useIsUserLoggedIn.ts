import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "@src/queries/userInfo";

export const useIsUserLoggedIn = () => {
  const { data, refetch } = useQuery(GET_USER_INFO, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  return {
    isUserLoggedIn: data?.viewer !== null,
    userData: data,
    refetchUser: refetch,
  };
};
