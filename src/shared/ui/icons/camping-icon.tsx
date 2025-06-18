import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

const CampingIcon = (props: SvgProps) => (
  <Svg width={80} height={80} viewBox="0 0 80 80" {...props}>
    <G fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <G transform="translate(42.3 29)">
        <Path d="M3 10.7v-2a8 8 0 0 1 8-8h.7a8 8 0 0 1 8 8v2h0m3 22L1 18.7a38.3 38.3 0 0 0 21.7 0L1 32.7" />
        <Rect width={3.9} height={1} x={1} y={12.7} rx={0.5} />
        <Path d="M2.5 13.9v2.5" />
        <Rect width={3.9} height={1} x={18.7} y={12.7} rx={0.5} />
        <Path d="M20.2 13.9v2.5M0 16.7c3.5 1.3 7.3 2 11.3 2 4 0 8-.7 12.4-2M11.3 5.5l-3.9 5m7-.3L11 15" />
      </G>
      <Path d="M37.9 58.5H9m27-44.2L11 58m18.8-43.7 12 22.2M23.6 58l8.9-15 7.2 13" />
    </G>
  </Svg>
);
const Memo = memo(CampingIcon);
export { Memo as CampingIcon };
