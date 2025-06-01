import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

export const CheckedIcon = memo((props: SvgProps) => (
  <Svg width={32} height={32} className="mb-1" {...props}>
    <G
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 3)"
    >
      <Rect width={26} height={26} rx={2} />
      <Path d="M6 13.479 11.04 20l8.878-14" />
    </G>
  </Svg>
));

CheckedIcon.displayName = "CheckedIcon";
