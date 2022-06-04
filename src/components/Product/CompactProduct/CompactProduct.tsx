import React from "react";
import { Wrapper } from "./CompactProduct.styles";

type ComponentProps = {
  children: React.ReactNode;
};

type ComponentType = React.FC<ComponentProps>;

export const CompactProduct: ComponentType = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);
