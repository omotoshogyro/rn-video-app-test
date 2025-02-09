import React from "react";
import { Image, ImageStyle } from "expo-image";
import { DimensionValue } from "react-native";

type RnImageProps = {
  uri: string;
  width: number | DimensionValue;
  height: number;
  bR?: number;
  ui?: ImageStyle;
  name?: string;
  fill?: boolean;
};

const RnImage = ({
  uri,
  width = "100%",
  height,
  bR,
  ui = {},
  fill = false,
  ...props
}: RnImageProps) => {
  return (
    <>
      <Image
        source={uri}
        contentFit={fill ? "fill" : "cover"}
        style={{
          width: width,
          height,
          borderRadius: bR,
          ...ui,
        }}
        recyclingKey={uri}
        {...props}

      />
    </>
  );
};

export default RnImage;
