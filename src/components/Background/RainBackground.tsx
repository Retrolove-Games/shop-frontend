import React, { useRef, useEffect, useState } from "react";
import { Wrapper } from "./Background.styles";
import { StaticImage } from "gatsby-plugin-image";
// @ts-ignore
import * as webglUtils from "webgl-utils.js";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const RainBackground: ComponentType = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const gfxCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gfxCanvas.current?.getContext("webgl2");

    if (ctx) {
      const gl = ctx;
      console.log(ctx);

      const vs = `#version 300 es
      uniform int numVerts;
      uniform float time;

      // hash function from https://www.shadertoy.com/view/4djSRW
      // given a value between 0 and 1
      // returns a value between 0 and 1 that *appears* kind of random
      float hash(float p) {
        vec2 p2 = fract(vec2(p * 5.3983, p * 5.4427));
        p2 += dot(p2.yx, p2.xy + vec2(21.5351, 14.3137));
        return fract(p2.x * p2.y * 95.4337);
      }

      void main() {
        float u = float(gl_VertexID) / float(numVerts);  // goes from 0 to 1
        float off = floor(time + u) / 1000.0;            // changes once per second per vertex
        float x = hash(u + off) * 2.0 - 1.0;             // random position
        float y = fract(time + u) * -2.0 + 1.0;          // 1.0 ->  -1.0

        gl_Position = vec4(x, y, 0, 1);
        gl_PointSize = 2.0;
      }
      `;

      const fs = `#version 300 es
      precision highp float;

      out vec4 outColor;

      void main() {
        outColor = vec4(1, 1, 1, 1);
      }
      `;

      // setup GLSL program
      const program = webglUtils.createProgramFromSources(gl, [vs, fs]);
      const numVertsLoc = gl.getUniformLocation(program, "numVerts");
      const timeLoc = gl.getUniformLocation(program, "time");

      // Make a buffer with just a count in it.

      const numVerts = 10;

      // draw
      const render = (time: number) => {
        time *= 0.0004; // convert to seconds

        webglUtils.resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.useProgram(program);

        // tell the shader the number of verts
        gl.uniform1i(numVertsLoc, numVerts);
        // tell the shader the time
        gl.uniform1f(timeLoc, time);

        const offset = 0;
        gl.drawArrays(gl.POINTS, offset, numVerts);

        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
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
