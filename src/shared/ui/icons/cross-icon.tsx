import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CrossIcon = (props: SvgProps) => (
  <Svg width={32} height={32} {...props}>
    <Path
      fill="none"
      fillRule="evenodd"
      stroke={props.color || "#000"}
      strokeWidth={props.strokeWidth || 1}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24 8 8 24m16 0L8 8"
    />
  </Svg>
);
const Memo = memo(CrossIcon);
export { Memo as CrossIcon };
