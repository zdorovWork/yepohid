import * as React from "react";
import { memo } from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const TentIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 81 80" width={81} height={80} {...props}>
    <G fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M6 60.5h67.789M6.52 57.136 8.933 60.5l7.734-6.5c4.865-5.505 9.218-10.972 13.057-16.402A156.431 156.431 0 0 0 40 21c4.093 7.238 7.905 13.354 11.436 18.348 3.53 4.993 7.496 9.877 11.897 14.652l6.942 6.5 2.853-3.364M40 22v38" />
      <Path d="M16.667 54c3.428-.643 6.35-.74 8.766-.292 2.416.448 3.953 1.371 4.612 2.771 4.198-3.741 7.622-8.247 9.955-13.826 1.688 3.445 3.208 6.137 4.56 8.075 1.35 1.94 3.164 3.856 5.44 5.751 1.462-1.49 3.178-2.414 5.148-2.771 1.97-.357 4.699-.26 8.185.292m-33.288 2.479L25.713 60l-1.563-1.76M50.001 56.479 54.333 60l1.707-1.76" />
    </G>
  </Svg>
);
const Memo = memo(TentIcon);
export { Memo as TentIcon };
