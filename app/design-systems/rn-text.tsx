import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { fs } from "../resources/config";

export type AppTextProps = {
  size?: number;
  style?: TextStyle;
  type?: "regular" | "semibold" | "medium" | "bold";
  children?: React.ReactNode;
} & TextProps;



/**
 * @param type defaults to body_medium
 */

const ShText = (props: AppTextProps) => {
  const fontWeight = () => {
    switch (type) {
      case "regular":
        return "Inter_Regular";
      case "medium":
        return "Inter_Medium";
      case "semibold":
        return "Inter_Semibold";
      case "bold":
        return "Inter_Bold";

      default:
        return "Inter_Regular";
    }
  };

  const { type = "regular", size = 16, style, ...rest } = props;

  return (
    <Text
      style={[
        {
          fontFamily: fontWeight(),
          fontSize: fs(size),
        },
        style,
      ]}
      {...rest}
    />
  );
};
export default ShText;
