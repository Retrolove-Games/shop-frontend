import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { DEFAULT_ERRORS } from "@src/apollo/defaultErrors";
import { LOG_IN, LOG_IN_ERRORS } from "@src/mutations/login";
import { GET_USER_INFO } from "@src/queries/userInfo";
import { storeAuth, getAuthStore, loginResponseToAuthStore } from "@src/apollo/auth";
import { graphQLErrorsToHuman } from "@src/apollo/utils";
import { Button } from "@retrolove-games/ui-button";
import { nanoid } from "nanoid";
import { useIsUserLoggedIn } from "@src/hooks/useIsUserLoggedIn";
import type { LoginRespone } from "@src/apollo/types";

type ComponentProps = {};
type ComponentType = React.VFC<ComponentProps>;

export const LoginForm: ComponentType = ({ ...props }) => {
  const [errorMsg, setErrorMsg] = useState<Array<string>>();
  let loginInput: HTMLInputElement, passwordInput: HTMLInputElement;
  const loggedIn = useIsUserLoggedIn();

  const {
    loading: userLoading,
    error: userError,
    data: userData,
    refetch: refetchUserInfo
  } = useQuery(GET_USER_INFO, {
    fetchPolicy: 'network-only',
  });

  const [logIn, { data, loading, error }] = useMutation(LOG_IN, {
    errorPolicy: "all",
    onCompleted: (data: LoginRespone) => {
      try {
        storeAuth(loginResponseToAuthStore(data));
        setErrorMsg([]);
      } catch (e) {
        if (error) {
          setErrorMsg(
            graphQLErrorsToHuman(
              error!.graphQLErrors,
              LOG_IN_ERRORS,
              DEFAULT_ERRORS
            )
          );
        }
      }
    },
  });

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn({
      variables: {
        username: loginInput.value,
        password: passwordInput.value,
        id: nanoid(),
      },
    });
  };

  if (loggedIn) return <p>JUŻ ZALOGOWANY</p>;

  if (loading || userLoading) return <p>Loading...</p>;

  const auth = getAuthStore();

  return (
    <>
      <ul>
        {errorMsg?.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={onLogin}>
        <div>
          <input ref={(node) => (loginInput = node!)} placeholder="Login" />
        </div>
        <div>
          <input ref={(node) => (passwordInput = node!)} placeholder="Hasło" />
        </div>
        <div>
          <Button type="submit" size="medium">
            Zaloguj
          </Button>
        </div>
      </form>
      <pre style={{ fontSize: "8px" }}>
        {JSON.stringify(data, null, " ")}
        <br />
        {JSON.stringify(auth, null, " ")}
      </pre>
      <div>{userData && <pre>{JSON.stringify(userData, null, " ")}</pre>}</div>
      <Button size="medium" onClick={() => refetchUserInfo()}>Refetch user</Button>
    </>
  );
};
