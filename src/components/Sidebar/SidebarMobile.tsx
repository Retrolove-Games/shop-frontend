import React from "react";
import { useId } from "react-id-generator";
import { Wrapper, Header } from "./SidebarMobile.styles";
import { Label } from "@retrolove-games/ui-label";
import { LabelGroup } from "@retrolove-games/ui-label-group";
import {
  FacebookButton,
  TwitterButton,
  CloseButton,
  SearchButton,
} from "@components/Button";
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
      <Header>
        <CloseButton clickHandler={onClose} />
        <LabelGroup as={"div"}>
          <LabelGroup.left>
            <SearchButton id={buttonId} clickHandler={() => console.log("aa")} />
          </LabelGroup.left>
          <LabelGroup.right>
            <Label htmlFor={buttonId}>Szukaj</Label>
          </LabelGroup.right>
        </LabelGroup>
      </Header>
    </Wrapper>
  );
};
