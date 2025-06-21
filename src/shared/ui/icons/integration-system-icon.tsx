import * as React from "react";
import { memo } from "react";
import Svg, { Defs, G, Mask, Path, SvgProps, Use } from "react-native-svg";

const IntegrationSystemIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 80 80" width={80} height={80} {...props}>
    <Defs>
      <Path id="a" d="M0 36.3h38V0H0z" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path stroke="#1A1919" strokeLinecap="round" strokeLinejoin="round" d="M6 60h67.8" />
      <G transform="translate(21 22)">
        <Path
          stroke="#1A1919"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M31.2 35.8H6.8v-11c0-1.8 1.5-3.2 3.3-3.2H28c1.8 0 3.2 1.4 3.2 3.2v11zM6.8.5h24.4v13.2c0 1.8-1.4 3.3-3.2 3.3H10a3.2 3.2 0 0 1-3.2-3.3V.5z"
        />
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Path
          stroke="#1A1919"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.4 21.6h9.3V18h-9.3zm16.8-15 6.3-1m-30.7 1-6.3-1"
          mask="url(#b)"
        />
      </G>
    </G>
  </Svg>
);
const Memo = memo(IntegrationSystemIcon);
export { Memo as IntegrationSystemIcon };
