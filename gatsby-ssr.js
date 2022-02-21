import * as React from "react";
import { getCssText } from "@retrolove-games/ui-themes";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      key="main"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
