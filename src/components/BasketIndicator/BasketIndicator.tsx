import React from "react";
import { Badge } from "@retrolove-games/ui-badge";
import { IconWithBadge } from "@retrolove-games/ui-icon-with-badge";
import { IconBasket } from "@retrolove-games/ui-icon";

type ComponentProps = {
  children: number;
};

export const BasketIndicator: React.VFC<ComponentProps> = ({ children, ...props }) => (
  <>
    <IconWithBadge {...props}>
      <IconWithBadge.icon>
        <IconBasket />
      </IconWithBadge.icon>
      <IconWithBadge.badge>
        <Badge label="Ilość produktów" minValue={0}>
          {children}
        </Badge>
      </IconWithBadge.badge>
    </IconWithBadge>
  </>
);
