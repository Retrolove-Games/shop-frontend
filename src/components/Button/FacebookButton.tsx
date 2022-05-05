import React from "react";
import { Button } from "@retrolove-games/ui-button";
import { IconFacebook } from "@retrolove-games/ui-icon";
import { FACEBOOK_URL } from "@src/constants/url";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const FacebookButton: ComponentType = ({ ...props }) => (
  <Button
    color="transparent"
    size="medium"
    as="a"
    href={FACEBOOK_URL}
    {...props}
  >
    <IconFacebook />
  </Button>
);
