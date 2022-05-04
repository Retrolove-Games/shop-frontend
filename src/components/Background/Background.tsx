import React from "react";
import { Wrapper } from "./Background.styles";
import { StaticImage } from "gatsby-plugin-image";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const Background: ComponentType = () => {
  return (
    <Wrapper aria-hidden={true} role="presentation">
      <StaticImage
        src="../../images/japanese-retrolove.jpg"
        alt=""
        placeholder="blurred"
        layout="fullWidth"
        imgClassName="image"
        objectFit="cover"
        className="image-wrapper"
      />
    </Wrapper>
  );
};
