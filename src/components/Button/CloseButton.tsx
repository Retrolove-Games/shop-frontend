import React from "react";
import { Button } from "@retrolove-games/ui-button";
import { IconClose } from "@retrolove-games/ui-icon";

type ComponentProps = {
  clickHandler: () => void;
};

type ComponentType = React.VFC<ComponentProps>;

export const CloseButton: ComponentType = ({ clickHandler, ...props }) => (
  <Button
    size={"medium"}
    color={"red"}
    onClick={clickHandler}
    aria-label={"Zamknij menu"}
  >
    <IconClose size={"xsmall"} />
  </Button>
);
