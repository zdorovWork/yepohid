import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowIcon = memo((props: SvgProps) => (
  <Svg width={48} height={48} viewBox="0 0 32 32" {...props}>
    <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m7 13 9.007 8.632L25 13" />
  </Svg>
));

ArrowIcon.displayName = "ArrowIcon";
