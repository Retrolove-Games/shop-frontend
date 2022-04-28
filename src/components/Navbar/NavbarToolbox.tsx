import React from "react";
import { ThemeSwitch } from "@components/ThemeSwitch";
import { BasketIndicator } from "@components/BasketIndicator";
import { LabelGroup } from "@retrolove-games/ui-label-group";
import { Label } from "@retrolove-games/ui-label";
import { IconUser } from "@retrolove-games/ui-icon";
import { Toolbox } from "./Navbar.styles";
import { useId } from "react-id-generator";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const NavbarToolbox: ComponentType = () => {
  const [themeId] = useId();

  return (
    <Toolbox>
      <LabelGroup as={"div"}>
        <LabelGroup.left>
          <ThemeSwitch id={themeId} />
        </LabelGroup.left>
        <LabelGroup.right>
          <Label htmlFor={themeId}>Tryb nocny</Label>
        </LabelGroup.right>
      </LabelGroup>

      <LabelGroup onClick={() => console.log("Koszyk")}>
        <LabelGroup.left>
          <BasketIndicator>{0}</BasketIndicator>
        </LabelGroup.left>
        <LabelGroup.right>
          <Label as="span">Koszyk</Label>
        </LabelGroup.right>
      </LabelGroup>

      <LabelGroup onClick={() => console.log("Konto")}>
        <LabelGroup.left>
          <IconUser />
        </LabelGroup.left>
        <LabelGroup.right>
          <Label as="span">Konto</Label>
        </LabelGroup.right>
      </LabelGroup>
    </Toolbox>
  );
};
