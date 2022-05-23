/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { Button } from "@retrolove-games/ui-button";
import { LogoDesktop, LogoMobile } from "@retrolove-games/ui-logo";
import { useTheme } from "@src/store/ThemeContext";
// @ts-ignore
import { Media } from "gatsby-plugin-fresnel";
import {
  IconMoon,
  IconSun,
  IconBasket,
  IconClose,
  IconBurger,
} from "@retrolove-games/ui-icon";
import { Switch } from "@retrolove-games/ui-switch";
import { Lozenge } from "@retrolove-games/ui-lozenge";
import { Badge } from "@retrolove-games/ui-badge";
import { IconWithBadge } from "@retrolove-games/ui-icon-with-badge";
import { LabelGroup } from "@retrolove-games/ui-label-group";
import { Label } from "@retrolove-games/ui-label";
import { Link } from "gatsby";
import { SidebarLayout } from "@components/Layout";
import { useProductCategories } from "@src/hooks/useProductCategories";
import { useHeaderMenu } from "@src/hooks/useHeaderMenu";
import { useAppState } from "@src/store/AppStateContext";
import { toggleSidebar } from "@store/actions/actions";

// markup
const PreviewPage = () => {
  const theme = useTheme();
  const { isSidebarOpened, dispatch } = useAppState();
  const [count, setCount] = React.useState(0);
  const [test, setTest] = React.useState("Cholibka");
  const data = useHeaderMenu();

  return (
    <>
      <SidebarLayout>
        <Media lessThan="md">
          <IconSun size={"small"} />
        </Media>
        <Media greaterThanOrEqual="md">
          <IconSun size={"medium"} />
        </Media>

        <div>
          <LogoDesktop />
        </div>
        <div>
          <LogoMobile />
        </div>

        <div>
          Is sidebar visible: {String(isSidebarOpened)}
          <Button onClick={toggleSidebar}>Toggle sidebar</Button>
          <Link to="/test/preview2">Preview 2</Link>
        </div>

        <div>
          <IconSun size={"medium"} />
        </div>

        <div>
          <IconBurger />
        </div>

        <div>
          <Button>Auto size</Button>
          <Button size={"medium"}>
            <IconClose size={"xsmall"} />
          </Button>
          <Button size={"medium"} color={"red"}>
            <IconClose size={"xsmall"} />
          </Button>
          <Button size={"medium"} color={"purpureus"}>
            <IconClose size={"xsmall"} />
          </Button>
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
          />{" "}
          {theme.colorMode}
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
        <Button disabled>Disabled</Button>
        <div></div>

        <div>
          <Lozenge color={"red"}>200 PLN</Lozenge>
        </div>

        <div>
          <Lozenge color={"purpureus"}>200 PLN</Lozenge>
        </div>

        <div>
          <Button color="red" onClick={() => setTest("Cholibka" + test)}>
            Static color red
          </Button>
          {test}
        </div>

        <div>
          <Button color="purpureus">Static color purpureus</Button>
        </div>

        <div>
          <Button color="purpureus" disabled>
            Disabled color purpureus
          </Button>
        </div>

        <div>
          <Badge label="Ilość produktów">{1}</Badge>
        </div>
        <div>
          <Badge label="Ilość produktów">{100}</Badge>
        </div>

        <div>
          <IconWithBadge>
            <IconWithBadge.icon>
              <IconBasket />
            </IconWithBadge.icon>
            <IconWithBadge.badge>
              <Badge label="Ilość produktów">{count}</Badge>
            </IconWithBadge.badge>
          </IconWithBadge>
          <Button
            size={"medium"}
            color="red"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </Button>
          <Button
            size={"medium"}
            color="neonBlue"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </Button>
        </div>

        <div>
          <LabelGroup as={"div"}>
            <LabelGroup.left>
              <IconBasket />
            </LabelGroup.left>
            <LabelGroup.right>
              <Label>Test</Label>
            </LabelGroup.right>
          </LabelGroup>
        </div>

        <div>
          <LabelGroup onClick={() => setCount(count + 1)}>
            <LabelGroup.left>
              <IconWithBadge>
                <IconWithBadge.icon>
                  <IconBasket />
                </IconWithBadge.icon>
                <IconWithBadge.badge>
                  <Badge label="Ilość produktów" minValue={3}>
                    {count}
                  </Badge>
                </IconWithBadge.badge>
              </IconWithBadge>
            </LabelGroup.left>
            <LabelGroup.right>
              <Label as="span">Koszyk</Label>
            </LabelGroup.right>
          </LabelGroup>
        </div>
        <h1>test</h1>
        <pre>
          {JSON.stringify(data, null, 4)} {String(data)}
          {data.nodes[0].id}
        </pre>
      </SidebarLayout>
    </>
  );
};

export default PreviewPage;
