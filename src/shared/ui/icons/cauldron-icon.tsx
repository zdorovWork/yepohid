import * as React from "react";
import { memo } from "react";
import Svg, { Defs, G, Mask, Path, SvgProps, Use } from "react-native-svg";

const CauldronIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 80 80" width={80} height={80} {...props}>
    <Defs>
      <Path id="a" d="M0 37.697h28.125V-.001H0z" />
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path stroke="#1A1919" strokeLinecap="round" strokeLinejoin="round" d="M6 60h67.789" />
      <G transform="translate(26 21)">
        <Path
          stroke="#1A1919"
          d="M12.459 8.975S10.853 8.84 9.923 6.67c-1.86 2.304-1.46 8.652 4.3 8.652 4.66 0 5.638-2.367 5.638-4.734 0-3.918-6.134-5.072-4.36-9.891 0 0-4.648 1.084-3.042 8.277z"
        />
        <Path
          stroke="#1A1919"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M26.244 37.197H1.846v-10.99c0-1.79 1.45-3.242 3.242-3.242h17.914a3.242 3.242 0 0 1 3.242 3.242v10.99z"
        />
        <Mask id="b" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Path
          stroke="#1A1919"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.375 22.965h9.375v-3.517H9.375zm9.375-3.517 8.875-11.439h-6.25m-12 11.439L.5 8.009h6.25m7.295 11.439v-2.125"
          mask="url(#b)"
        />
      </G>
    </G>
  </Svg>
);
const Memo = memo(CauldronIcon);
export { Memo as CauldronIcon };
