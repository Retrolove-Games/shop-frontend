import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { DEFAULT_ERRORS } from "@src/apollo/defaultErrors";
import { LOG_IN, LOG_IN_ERRORS } from "@src/mutations/login";
import { GET_USER_INFO } from "@src/queries/userInfo";
import { storeAuth, getAuthStore, loginResponseToAuthStore, logOut } from "@src/apollo/auth";
import { graphQLErrorsToHuman } from "@src/apollo/utils";
import { Button } from "@retrolove-games/ui-button";
import { nanoid } from "nanoid";
import { useIsUserLoggedIn } from "@src/hooks/useIsUserLoggedIn";
import { navigate } from "gatsby"
import type { LoginRespone } from "@src/apollo/types";
import { isBrowser } from "@src/helpers/utils";
import { client } from "@src/apollo/client";

type ComponentProps = {};
type ComponentType = React.VFC<ComponentProps>;

export const LoginForm: ComponentType = ({ ...props }) => {
  const [errorMsg, setErrorMsg] = useState<Array<string>>();
  let loginInput: HTMLInputElement, passwordInput: HTMLInputElement;
  const {isUserLoggedIn, userData, refetchUser} = useIsUserLoggedIn();

  const [logIn, { data, loading, error }] = useMutation(LOG_IN, {
    errorPolicy: "all",
    awaitRefetchQueries: true,
    onCompleted: (data: LoginRespone) => {
      refetchUser();
      // client.resetStore();
      try {
        storeAuth(loginResponseToAuthStore(data));
        setErrorMsg([]);
        // isBrowser() && history.go(-1);
        // navigate("/");
      } catch (e) {
        if (error) {
          // Set client errors
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

  if (loading) return <p>Loading...</p>;

  const auth = getAuthStore();

  return (
    <>
      <ul>
        {errorMsg?.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      {isUserLoggedIn && <p>JUŻ ZALOGOWANY</p>}
      <form onSubmit={onLogin}>
        <div>
          <input ref={(node) => (loginInput = node!)} placeholder="Login" value="root" />
        </div>
        <div>
          <input ref={(node) => (passwordInput = node!)} placeholder="Hasło" value="toor" />
        </div>
        <div>
          <Button type="submit" size="medium">
            Zaloguj
          </Button>
          <Button size="medium" onClick={() => logOut().then(_=> console.log("logged out")) }>
            Wyloguj
          </Button>
        </div>
      </form>
      <pre style={{ fontSize: "8px" }}>
        {JSON.stringify(data, null, " ")}
        <br />
        Data from the hook:<br />
        {JSON.stringify(userData, null, " ")}
      </pre>
    </>
  );
};
