import React from "react";
import cls from "classnames";
import { IconProps } from "..";

export const ArrowBack: React.FC<IconProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="16" height="16" viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >


<g clipPath="url(#clip0_570_817)">

<path fillRule="evenodd" clipRule="evenodd" d="M4.64645 2.64645C4.84171 2.45118 5.15829 2.45118 5.35355 2.64645L8.35355 5.64645C8.54882 5.84171 8.54882 6.15829 8.35355 6.35355C8.15829 6.54882 7.84171 6.54882 7.64645 6.35355L5 3.70711L2.35355 6.35355C2.15829 6.54882 1.84171 6.54882 1.64645 6.35355C1.45118 6.15829 1.45118 5.84171 1.64645 5.64645L4.64645 2.64645Z" fill=""/>
<path fillRule="evenodd" clipRule="evenodd" d="M5 2.5C5.27614 2.5 5.5 2.72386 5.5 3V11.5H14C14.2761 11.5 14.5 11.7239 14.5 12C14.5 12.2761 14.2761 12.5 14 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12V3C4.5 2.72386 4.72386 2.5 5 2.5Z" fill=""/>
</g>
<defs>
<clipPath id="clip0_570_817">
<rect width="16" height="16" fill=""/>
</clipPath>
</defs>
</svg>



  );
};
