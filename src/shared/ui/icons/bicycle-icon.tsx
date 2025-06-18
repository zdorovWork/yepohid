import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const BicycleIcon = (props: SvgProps) => (
  <Svg width={80} height={80} viewBox="0 0 80 80" {...props}>
    <G fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <Path d="m30.9 31.5-1.3-1.2a2 2 0 0 1-.1-2.7l4.6-5.3c.7-.7 3-2.2 5.4-.6.6.5.8 2 0 2.7l-6 7c-.7.8-1.9.8-2.6.1zM51 22a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM34 49a7 7 0 1 0-14 0 7 7 0 0 0 14 0zm26 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0zm-18.6-2L47 36h-9" />
      <Path d="M33.7 38 27 49h10m16 0-6-16" />
      <Path d="M39.6 51c-1 0-1.8-.8-1.8-1.7v-8.1l-5.4-6c-.6-.6-.5-1.6 0-2.2l8-8.4a1.8 1.8 0 0 1 3 .6l1.5 4.3h3.3c1 0 1.8.8 1.8 1.7s-.8 1.7-1.8 1.7h-4.6c-.8 0-1.5-.4-1.8-1.2l-.8-2.6-4.8 5 4.8 5.3c.2.3.4.7.4 1.1v8.8c0 1-.8 1.7-1.8 1.7z" />
    </G>
  </Svg>
);
const Memo = memo(BicycleIcon);
export { Memo as BicycleIcon };
