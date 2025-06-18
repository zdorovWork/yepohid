import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const OffSeasonIcon = (props: SvgProps) => (
  <Svg width={80} height={80} viewBox="0 0 80 80" {...props}>
    <Path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m24 57 34-32M34 50.4a7.8 7.8 0 0 0 9-.4 7 7 0 0 0 5 2 7 7 0 0 0 5.5-2.6c1.2 1 2.9 1.7 4.7 1.7 3.7 0 6.8-2.8 6.8-6.3s-3-6.4-6.8-6.4c-1.5 0-3 .5-4 1.2A6.4 6.4 0 0 0 52 34m-4 20-3 6m-5-6-3 6m19-6-3 6M34.4 19c-2.2 0-5.6 2.3-1.4 12 1.4-.8 3 0 3 0s5.4-12-1.6-12zM48 24c-1.6-1.7-5.8-2.4-9.9 7.9 1.6.4 2.1 2.1 2.1 2.1s12.7-5 7.8-10zm-3 10c-1.2.3-2.5.7-4 1.3.8 1.3 0 2.7 0 2.7m-5 4c-1.3 1-2.8 0-2.8 0s-.7 1.7-1.2 4m-9.9 4c1.6 1.7 5.8 2.4 9.9-7.9-1.6-.4-2.1-2.1-2.1-2.1s-12.7 5-7.8 10zM17 36.7c0 2.2 2.3 5.6 12 1.4-.8-1.4 0-3 0-3s-12-5.4-12 1.6zM22 24c-1.7 1.6-2.4 5.8 7.9 9.9.4-1.6 2.1-2.1 2.1-2.1S27 19.1 22 24zm16 12.4a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z"
    />
  </Svg>
);
const Memo = memo(OffSeasonIcon);
export { Memo as OffSeasonIcon };
