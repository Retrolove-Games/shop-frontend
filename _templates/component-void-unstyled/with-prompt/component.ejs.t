---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from "react";

type ComponentProps = {};

type ComponentType = React.FC<ComponentProps>;

export const <%=name%>: ComponentType = ({ ...props }) => (
  <>
    <div {...props}>
      Hello world
    </div>
  </>
);
