import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DEFAULT_ERRORS } from "@src/mutations/defaultErrors";
import { LOG_IN, LOG_IN_ERRORS } from "@src/mutations/login";
import { storeAuth, getAuth } from "@src/apollo/auth";
import { graphQLErrorsToHuman } from "@src/apollo/utils";
import { Button } from "@retrolove-games/ui-button";
import { nanoid } from "nanoid";
import type { LoginRespone } from "@src/apollo/types";

type ComponentProps = {};
type ComponentType = React.VFC<ComponentProps>;

export const LoginForm: ComponentType = ({ ...props }) => {
  const [errorMsg, setErrorMsg] = useState<Array<string>>();
  let loginInput: HTMLInputElement, passwordInput: HTMLInputElement;

  const [logIn, { data, loading, error }] = useMutation(LOG_IN, {
    errorPolicy: "all",
    onCompleted: (data: LoginRespone) => {
      try {
        storeAuth(data);
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

  if (loading) return <p>Loading...</p>;

  const auth = getAuth();

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
    </>
  );
};
