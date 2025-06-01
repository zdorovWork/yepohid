import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const EditIcon = (props: SvgProps) => (
  <Svg width={32} height={32} className="mb-1" {...props}>
    <G fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
      <Path d="m23.811 1.234 4.643 3.897-1.558 1.857-4.644-3.897zM20.46 4.944l4.75 3.962L7.67 29.633l-4.447.389-.389-4.447z" />
    </G>
  </Svg>
);
export { EditIcon };
