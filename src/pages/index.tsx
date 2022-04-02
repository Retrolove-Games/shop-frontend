/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { Button } from "@retrolove-games/ui-button";
import { LogoDesktop, LogoMobile } from "@retrolove-games/ui-logo";
import { ThemeContext } from "../context/ThemeContext";
import { IconMoon, IconSun } from "@retrolove-games/ui-icon";
import { Switch } from "@retrolove-games/ui-switch";

// markup
const IndexPage = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <main
          style={{
            backgroundColor: theme.colorMode === "dark" && "#252220",
            transition: "all .5s linear",
            height: "100vh",
            padding: "100px",
          }}
        >
          <LogoDesktop />
          <LogoMobile />

          <Switch
            id="theme"
            isOn={theme.colorMode === "dark"}
            leftIcon={<IconSun size="xsmall" />}
            rightIcon={<IconMoon size="xsmall" />}
            handleToggle={() =>
              theme.colorMode === "dark"
                ? theme.setColorMode("light")
                : theme.setColorMode("dark")
            }
          />


          <Button
            onClick={() =>
              theme.colorMode === "dark"
                ? theme.setColorMode("light")
                : theme.setColorMode("dark")
            }
          >
            Test
          </Button>
          {/* <button onClick={() => theme.colorMode === "dark" ? theme.setColorMode("light") : theme.setColorMode("dark")}>AAAA</button> */}
        </main>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexPage;
