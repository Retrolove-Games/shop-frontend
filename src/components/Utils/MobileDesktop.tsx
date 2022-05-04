import React from "react";
// @ts-ignore
import { Media } from "gatsby-plugin-fresnel";

type ComponentProps = {
  mobile: React.ReactElement;
  desktop: React.ReactElement;
};

type ComponentType = React.VFC<ComponentProps>;

/**
 * Utility component selector mobile & desktop
 *
 * @prop mobile - Mobile content
 * @prop desktop - Desktop content
 */
export const MobileDesktop: ComponentType = ({ mobile, desktop }) => (
  <>
    <Media lessThan="xl">{mobile}</Media>
    <Media greaterThanOrEqual="xl">{desktop}</Media>
  </>
);
