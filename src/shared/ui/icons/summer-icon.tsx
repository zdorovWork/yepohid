import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SummerIcon = (props: SvgProps) => (
  <Svg width={80} height={80} {...props}>
    <Path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M53 39.5C53 32 47.2 26 40 26s-13 6-13 13.5S32.8 53 40 53s13-6 13-13.5zM44 23l-3.5-8-3.5 8a17.3 17.3 0 0 1 7 0zm-10 .7L27 19l1.7 9a17 17 0 0 1 5.3-4.3zM26 31l-9 .8 6.8 5.2a14 14 0 0 1 2.2-6zm-2.2 10L17 46.2l9 .8a14.7 14.7 0 0 1-2.2-6zm5 9L27 59l7-4.7a15.8 15.8 0 0 1-5.3-4.3zm8.2 5 3.5 8 3.5-8a17.3 17.3 0 0 1-7 0zm10-.7 7 4.7-1.7-9a17 17 0 0 1-5.3 4.3zm7-7.3 9-.8-6.8-5.2a14 14 0 0 1-2.2 6zm2.2-10 6.8-5.2-9-.8a14.8 14.8 0 0 1 2.2 6zm-4-9 1.8-9-7 4.7a15.8 15.8 0 0 1 5.3 4.3z"
    />
  </Svg>
);
const Memo = memo(SummerIcon);
export { Memo as SummerIcon };
