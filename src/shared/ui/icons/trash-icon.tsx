import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const TrashIcon = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <Path
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m24.4 10.833-1.786 13.174c-.132 1.044-1.257 1.826-2.513 1.826h-8.136c-1.322 0-2.38-.782-2.513-1.826L7.6 10.833m18.4-2.5c-1.871-.243-2.774-.365-4.71-.487-.838-.06-1.484-.67-1.484-1.4.065-.73-.645-1.34-1.548-1.4a60.635 60.635 0 0 0-4.71 0c-.903 0-1.548.67-1.548 1.4.065.73-.58 1.34-1.484 1.4-1.742.122-2.645.244-4.516.487m0 0c6.8-.956 13.336-.893 20 0m-13.6 3.334.8 11.666m6.4-11.666-.8 11.666"
    />
  </Svg>
);
const Memo = memo(TrashIcon);
export { Memo as TrashIcon };
