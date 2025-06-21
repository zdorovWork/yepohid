import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const FireIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 80 80" width={80} height={80} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path stroke="#1A1919" strokeLinecap="round" strokeLinejoin="round" d="M6 60h67.789" />
      <Path
        stroke="#1A1919"
        d="M37.55 39.121s-3.38-.285-5.338-4.85c-3.914 4.85-3.073 18.212 9.052 18.212 9.81 0 11.868-4.982 11.868-9.965 0-8.247-12.912-10.677-9.175-20.82 0 0-9.787 2.281-6.406 17.423z"
      />
      <Path stroke="#000" d="M28 55.833 55.431 51 56 54.225l-27.431 4.832z" />
      <Path
        stroke="#000"
        d="m42.624 56.526 12.796 2.531.644-3.112-4.874-.916M42 53.126l-13.124-2.135L28 53.998l4.215 1.031"
      />
    </G>
  </Svg>
);
const Memo = memo(FireIcon);
export { Memo as FireIcon };
