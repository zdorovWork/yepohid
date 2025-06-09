import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CrossIcon = (props: SvgProps) => (
  <Svg width={32} height={32} className="mb-1" {...props}>
    <Path
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24 8 8 24m16 0L8 8"
    />
  </Svg>
);
const Memo = memo(CrossIcon);
export { Memo as CrossIcon };
