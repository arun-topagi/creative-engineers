import { StaticImageData } from 'next/image';

export interface ILogo {
  //   image: HTMLImageElement;
  src: string | StaticImageData;
  className?: string;
  height: number,
  width: number
}
