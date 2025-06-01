import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
  <Svg width={26} height={30} className="mb-1" {...props}>
    <Path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.67 10.133 12.592 1h0l10.925 9.133a3 3 0 0 1 1.076 2.302V26a3 3 0 0 1-3 3h-18a3 3 0 0 1-3-3V15.931h0v-3.497c0-.888.394-1.731 1.075-2.301z"
    />
  </Svg>
);
export { HomeIcon };
