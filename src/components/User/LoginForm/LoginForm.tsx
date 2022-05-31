import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOG_IN, LOG_IN_ERRORS } from "@src/mutations/login";
import { storeAuth, graphQLErrorsToHuman } from "@src/apollo/utils";
import { Button } from "@retrolove-games/ui-button";
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
      } catch(e) {
        if(error) {
          setErrorMsg(graphQLErrorsToHuman(error?.graphQLErrors, LOG_IN_ERRORS));
        }
        console.log(error?.graphQLErrors);
      }
    },
  });

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn({
      variables: {
        username: loginInput.value,
        password: passwordInput.value,
        id: "cholibka",
      },
    });
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <ul>
        {errorMsg?.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
      <form onSubmit={onLogin}>
        <div>
          <input ref={node => loginInput = node!} placeholder="Login" />
        </div>
        <div>
          <input ref={node => passwordInput = node!} placeholder="Hasło" />
        </div>
        <div>
          <Button type="submit" size="medium">Zaloguj</Button>
        </div>
      </form>
      <pre style={{fontSize: "8px"}}>
        { JSON.stringify(data, null, " ") }
      </pre>
    </>
  );
};
