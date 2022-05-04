import React, { useRef, useEffect, useState } from "react";
import { Wrapper } from "./Background.styles";
import { StaticImage } from "gatsby-plugin-image";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const Background: ComponentType = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const gfxCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gfxCanvas.current?.getContext('webgl2');

    if (ctx) {
      console.log("WebGL works");
    }

    window.addEventListener("resize", () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });
  }, []);

  return (
    <Wrapper aria-hidden={true} role="presentation">
      <canvas
        className="rain"
        width={dimensions.width}
        height={dimensions.height}
        ref={gfxCanvas}
      ></canvas>
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
