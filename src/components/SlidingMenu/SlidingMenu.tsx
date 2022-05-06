import React from "react";
import { Wrapper } from "./SlidingMenu.styles";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingMenu: ComponentType = ({ ...props }) => (
  <Wrapper {...props}>
    Hello world
  </Wrapper>
);
