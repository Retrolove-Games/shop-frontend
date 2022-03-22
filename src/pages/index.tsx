/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import HelloWorld from "@retrolove-games/ui-hello-world";
import { Logo } from "@retrolove-games/ui-logo";
import { ThemeContext } from "../context/ThemeContext";

// markup
const IndexPage = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <main style={{ backgroundColor:  theme.colorMode === "dark" && "#252220", transition: "all .5s linear", height: "100vh", padding: "100px"  }}>
          <Logo />
          <HelloWorld />
          <button onClick={() => theme.colorMode === "dark" ? theme.setColorMode("light") : theme.setColorMode("dark")}>AAAA</button>
        </main>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexPage;
