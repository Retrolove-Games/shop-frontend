import React from "react";

type SubComponents = {
  edge: React.FC;
  center: React.FC;
};

type ComponentType = React.FC & SubComponents;

export const Navbar: ComponentType = ({ children }) => <div>{children}</div>;

Navbar.edge = ({ children }) => <div>{children}</div>;
Navbar.center = ({ children }) => <div>{children}</div>;
