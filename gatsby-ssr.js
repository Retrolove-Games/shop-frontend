import * as React from "react";
import { minifySync } from "terser-sync";
import { getCssText, darkTheme } from "@retrolove-games/ui-themes";
import { COLOR_MODE_KEY } from "./constants";

function setColorsByTheme() {
  const colorModeKey = "🔑";
  const darkThemeClassName = "🌙";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  let root = document.documentElement;
  if (colorMode === "dark") {
    root.classList.add(darkThemeClassName);
    root.dataset.theme = "dark";
  } else {
    root.dataset.theme = "light";
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('🔑', COLOR_MODE_KEY)
    .replace('🌙', darkTheme.className);

  let calledFunction = `(${boundFn})()`;
  calledFunction =  minifySync(calledFunction).code;

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

const FallbackStyles = () => {
  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />
  );
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents(<MagicScriptTag key="magic-script-tag" />);
};
