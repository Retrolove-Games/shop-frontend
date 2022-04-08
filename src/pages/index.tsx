/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { Button } from "@retrolove-games/ui-button";
import { LogoDesktop, LogoMobile } from "@retrolove-games/ui-logo";
import { ThemeContext } from "../context/ThemeContext";
import { IconMoon, IconSun, IconBasket } from "@retrolove-games/ui-icon";
import { Switch } from "@retrolove-games/ui-switch";
import { Lozenge } from "@retrolove-games/ui-lozenge";
import { Badge } from "@retrolove-games/ui-badge";

// markup
const IndexPage = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <main
          style={{
            // backgroundColor: theme.colorMode === "dark" && "#252220",
            // transition: "all .5s linear",
            height: "100vh",
            padding: "100px",
          }}
        >
          <div>
            <LogoDesktop />
          </div>
          <div>
            <LogoMobile />
          </div>

          <div>
            <IconSun size={"medium"} />
          </div>

          <div>
            <Switch
              id="theme"
              isOn={theme.colorMode !== "dark"}
              leftIcon={<IconSun size="xsmall" />}
              rightIcon={<IconMoon size="xsmall" />}
              label="Disable dark mode"
              handleToggle={() =>
                theme.colorMode === "dark"
                  ? theme.setColorMode("light")
                  : theme.setColorMode("dark")
              }
            />
          </div>

          <div>
            <Button
              onClick={() =>
                theme.colorMode === "dark"
                  ? theme.setColorMode("light")
                  : theme.setColorMode("dark")
              }
            >
              Test
            </Button>
          </div>

          <div>
            <Lozenge color={"red"}>200 PLN</Lozenge>
          </div>

          <div>
            <Button color="red">Static color red</Button>
          </div>

          <div>
            <Button color="neonBlue" size="small">Static color blue</Button>
          </div>


          <div>
            <Badge label="Ilość produktów">{1}</Badge>
          </div>
          <div>
            <Badge label="Ilość produktów">{100}</Badge>
          </div>

          <div>
            <IconBasket /><Badge label="Ilość produktów">{1}</Badge>
          </div>
        </main>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexPage;
