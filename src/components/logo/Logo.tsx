import Image from "next/image";
import React, { FunctionComponent } from "react";
import { ILogo } from "../type/headerType";

const Logo: FunctionComponent<ILogo> = ({ src, height, width}) => {
  return (
    <div>
          <Image
            src={src}
            alt="Logo"
            className="object-cover cursor-pointer"
            height={height}
            width={width}
            layout="intrinsic"
          />
    </div>
  );
};

export default Logo;