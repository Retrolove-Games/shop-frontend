import React from "react";
import { Button } from "@retrolove-games/ui-button";
import { IconSearch } from "@retrolove-games/ui-icon";

type ComponentProps = {
  clickHandler: () => void;
  id: string;
};

type ComponentType = React.VFC<ComponentProps>;

export const SearchButton: ComponentType = ({ clickHandler, ...props }) => (
  <Button
    size={"medium"}
    color={"transparent"}
    onClick={clickHandler}
    aria-label={"Zamknij menu"}
    {...props}
  >
    <IconSearch size={"xsmall"} />
  </Button>
);
