import React from "react";
import { Button } from "@retrolove-games/ui-button";
import { IconTwitter } from "@retrolove-games/ui-icon";
import { TWITTER_URL } from "@src/constants/url";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const TwitterButton: ComponentType = ({ ...props }) => (
  <Button
    color="transparent"
    size="medium"
    as="a"
    href={TWITTER_URL}
    {...props}
  >
    <IconTwitter />
  </Button>
);
