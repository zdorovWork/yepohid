import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CheckmarkIcon = (props: SvgProps) => (
  <Svg width={32} height={32} {...props}>
    <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m7 14.987 6.684 6.538L25 10" />
  </Svg>
);
const Memo = memo(CheckmarkIcon);
export { Memo as CheckmarkIcon };
