/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import HelloWorld from "@retrolove-games/ui-hello-world";
import { ThemeContext } from "../context/ThemeContext";

// markup
const IndexPage = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <main>
          <HelloWorld />
          <button onClick={() => theme.setColorMode("dark")}>AAAA</button>
        </main>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexPage;
