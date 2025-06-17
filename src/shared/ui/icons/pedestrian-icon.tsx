import * as React from "react";
import { memo } from "react";
import Svg, { Circle, G, Path, SvgProps } from "react-native-svg";

const PedestrianIcon = (props: SvgProps) => (
  <Svg width={80} height={80} {...props}>
    <G
      fill="none"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(31 19)"
    >
      <Path d="M21.6 17.2 16 16l-3.4-5.5A3 3 0 0 0 9.9 9a3 3 0 0 0-3 3v.2l-.2.4-1.4 18.2-5 8.6c-.5.8-.2 1.9.6 2.4a1.8 1.8 0 0 0 2.5-.7l5.2-9c.2-.2.3-.4.3-.7l.5-6.8 5.2 4.8v7.3c0 1 .8 1.7 1.8 1.7s1.7-.7 1.7-1.7v-8.1c0-.5-.2-1-.5-1.3L11.7 22l.5-5.2 1.1 1.8c.3.5.7.8 1.2.8l6.4 1.3c1 .2 2-.5 2.1-1.4.2-1-.4-1.9-1.4-2z" />
      <Circle cx={11.1} cy={3} r={3} />
      <Path d="m4.3 23-1.7-.1c-1-.1-1.6-1-1.5-2L2 8.7c0-1 .9-1.8 1.8-1.7l1.7.1c1 .1 1.6 1 1.5 2l-.9 12.2c0 1-1 1.8-1.8 1.7zM21.8 7.3l-.5 9.4m-.5 4.6L20 37" />
    </G>
  </Svg>
);
const Memo = memo(PedestrianIcon);
export { Memo as PedestrianIcon };
