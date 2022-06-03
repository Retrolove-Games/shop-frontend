---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from "react";
import { Wrapper } from "./<%=name%>.styles";

type ComponentProps = {
  children: React.ReactNode;
};

type ComponentType = React.FC<ComponentProps>;

export const <%=name%>: ComponentType = ({ children, ...props }) => (
  <Wrapper {...props}>
    {children}
  </Wrapper>
);
