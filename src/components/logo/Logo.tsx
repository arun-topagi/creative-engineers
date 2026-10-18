import Image from "next/image";
import React, { FunctionComponent } from "react";
import { ILogo } from "../type/headerType";

const Logo: FunctionComponent<ILogo> = ({
  src,
  height,
  width,
  className,
  alt = "Creative Engineers",
  style,
}) => {
  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <Image
        src={src}
        alt={alt}
        className={className}
        height={height}
        width={width}
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          ...style,
        }}
      />
    </div>
  );
};

export default Logo;