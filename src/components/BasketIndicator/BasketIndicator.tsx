import React from "react";
import { Badge } from "@retrolove-games/ui-badge";
import { IconWithBadge } from "@retrolove-games/ui-icon-with-badge";
import { IconBasket } from "@retrolove-games/ui-icon";

type ComponentProps = {
  count: number;
};

export const BasketIndicator: React.FC<ComponentProps> = ({ count }) => (
  <>
    <IconWithBadge>
      <IconWithBadge.icon>
        <IconBasket />
      </IconWithBadge.icon>
      <IconWithBadge.badge>
        <Badge label="Ilość produktów" minValue={0}>
          {count}
        </Badge>
      </IconWithBadge.badge>
    </IconWithBadge>
  </>
);
