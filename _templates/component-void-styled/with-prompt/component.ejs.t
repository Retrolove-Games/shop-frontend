---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from "react";
import { Wrapper } from "./<%=name%>.styles";

type ComponentProps = {};

type ComponentType = React.FC<ComponentProps>;

export const <%=name%>: ComponentType = ({ ...props }) => (
  <Wrapper {...props}>
    Hello world
  </Wrapper>
);
