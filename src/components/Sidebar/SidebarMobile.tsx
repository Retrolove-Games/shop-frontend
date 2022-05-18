import React from "react";
import { useId } from "react-id-generator";
import {
  Wrapper,
  HeaderWrapper,
  MenuWrapper,
  InnerContainer,
} from "./SidebarMobile.styles";
import { Label } from "@retrolove-games/ui-label";
import { LabelGroup } from "@retrolove-games/ui-label-group";
import {
  FacebookButton,
  TwitterButton,
  CloseButton,
  SearchButton,
} from "@components/Button";
import { SlidingMenu } from "@components/SlidingMenu";
import type { ComponentProps } from "./Sidebar.types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarMobile: ComponentType = ({
  expanded,
  onClose,
  ...props
}) => {
  const [buttonId] = useId();

  return (
    <Wrapper aria-expanded={expanded} {...props}>
      <InnerContainer>
        <HeaderWrapper>
          <CloseButton clickHandler={onClose} />
          <LabelGroup as={"div"}>
            <LabelGroup.left>
              <Label htmlFor={buttonId}>Szukaj</Label>
            </LabelGroup.left>
            <LabelGroup.right>
              <SearchButton
                id={buttonId}
                clickHandler={() => console.log("aa")}
              />
            </LabelGroup.right>
          </LabelGroup>
        </HeaderWrapper>
        <MenuWrapper>
          <SlidingMenu />
        </MenuWrapper>
      </InnerContainer>
    </Wrapper>
  );
};
