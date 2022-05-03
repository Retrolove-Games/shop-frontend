import React from "react";
import { Wrapper } from "./Background.styles";
import { StaticImage } from "gatsby-plugin-image";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const Background: ComponentType = () => (
  <Wrapper>
    <StaticImage
      src="../../images/japanese-retrolove.jpg"
      alt=""
      aria-hidden={true}
      placeholder="blurred"
      layout="fullWidth"
      imgClassName="image"
      objectFit="cover"
      className="wrapper"
    />
  </Wrapper>
);
