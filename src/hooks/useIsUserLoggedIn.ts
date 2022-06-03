import { useQuery } from "@apollo/client";
import { GET_USER_INFO, GetUserInfo } from "@src/queries/userInfo";

export const useIsUserLoggedIn = () => {
  const { data, refetch } = useQuery<GetUserInfo>(GET_USER_INFO, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  return {
    isUserLoggedIn: data?.viewer !== null,
    userData: data?.viewer,
    refetchUser: refetch,
  };
};
