import { StaticImageData } from 'next/image';
import React from 'react';

export interface ILogo {
  src: string | StaticImageData;
  className?: string;
  height: number;
  width: number;
  alt?: string;
  style?: React.CSSProperties;
}

