import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "@src/queries/userInfo";

export const useIsUserLoggedIn = () => {
  const { data } = useQuery(GET_USER_INFO);

  return data?.viewer !== null;
};
