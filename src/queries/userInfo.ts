import { gql } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { User } from "@src/generated/graphql";

export type GetUserInfo = {
  viewer: Maybe<Pick<User, "id" | "username" | "firstName" | "lastName">>
}

export const GET_USER_INFO = gql`
  query UserInfo {
    viewer {
      id
      username
      firstName
      lastName
    }
  }
`;
