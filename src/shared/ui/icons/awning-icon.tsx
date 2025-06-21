import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const AwningIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 80 80" width={80} height={80} {...props}>
    <G fill="none" fillRule="evenodd" stroke="#1A1919">
      <Path d="M40.69 24c-22.445 0-24.157 36-24.157 36h48.313S63.134 24 40.69 24z" />
      <Path d="M40.626 30c-22.443.098-24.03 29.874-24.03 29.874l48.25.126s-1.776-30.098-24.22-30z" />
      <Path d="M24.704 56h18.65c6.809 0 13.025-6.077 13.025-12.32C56.38 34.634 48.682 30 40.69 30" />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M56.38 44.728 36.65 31s.187 20.179 19.73 13.728zM6 60h67.789"
      />
    </G>
  </Svg>
);
const Memo = memo(AwningIcon);
export { Memo as AwningIcon };
