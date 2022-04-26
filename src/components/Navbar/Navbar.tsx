import React from "react";
import { VariantProps } from "@stitches/react";
import { Wrapper, Edge, Center } from "./Navbar.styles";

type SubComponents = {
  left: React.FC;
  center: React.FC;
  right: React.FC;
};

type ComponentVariants = VariantProps<typeof Wrapper>;

type ComponentType = React.FC<ComponentVariants> & SubComponents;

export const Navbar: ComponentType = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Navbar.left = ({ children }) => <Edge align="left">{children}</Edge>;
Navbar.center = ({ children }) => <Center>{children}</Center>;
Navbar.right = ({ children }) => <Edge align="right">{children}</Edge>;
