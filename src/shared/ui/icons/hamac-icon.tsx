import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const HamacIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 80 80" width={80} height={80} {...props}>
    <G fill="none" fillRule="evenodd" strokeLinecap="round">
      <Path
        stroke="#000"
        strokeLinejoin="round"
        d="m3.179 25.85 5.482 1.458C19.252 35.103 29.864 39 40.498 39c10.633 0 20.998-3.897 31.094-11.692"
      />
      <Path
        stroke="#000"
        strokeLinejoin="round"
        d="M12 30c9.493 12.667 18.898 19 28.217 19 9.32 0 18.58-6.333 27.783-19"
      />
      <Path stroke="#1A1919" strokeLinejoin="round" d="M6 60h67.789" />
      <Path stroke="#000" strokeLinejoin="round" d="M12 30c9.493 8 18.898 12 28.217 12 9.32 0 18.58-4 27.783-12" />
      <Path
        stroke="#000"
        d="m11.5 12.5-8 43M68.5 12.5l8 43M71.264 27.308l5.832-1.96M24.5 38.5l-2 2m9 1-3 3m12-2-5 6m14-7-4 6m12-10-3 6"
      />
    </G>
  </Svg>
);
const Memo = memo(HamacIcon);
export { Memo as HamacIcon };
