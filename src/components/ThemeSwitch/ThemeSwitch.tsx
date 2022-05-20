import React from "react";
import { Switch } from "@retrolove-games/ui-switch";
import { IconMoon, IconSun } from "@retrolove-games/ui-icon";
import { useTheme } from "@src/store/ThemeContext";

type ComponentProps = {
  id: string;
};

type ComponentType = React.VFC<ComponentProps>;

export const ThemeSwitch: ComponentType = ({ id, ...props }) => {
  const theme = useTheme();

  return (
    <Switch
      id={id}
      isOn={theme.colorMode !== "dark"}
      leftIcon={<IconSun size="xsmall" />}
      rightIcon={<IconMoon size="xsmall" />}
      label="Disable dark mode"
      handleToggle={theme.toggleColorMode}
    />
  );
};
