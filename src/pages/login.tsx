import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@src/queries/categories";

const LoginPage = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Login page</h1>
      <pre>{JSON.stringify(data, null, " ")}</pre>
    </>
  );
};

export default LoginPage;
