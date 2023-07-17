import React from "react";
import cls from "classnames";
import { IconProps } from "..";

export const Rings: React.FC<IconProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="88" height="36" viewBox="0 0 88 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
<circle cx="18" cy="18" r="18" fill="#E0CCC8"/>
<circle cx="44" cy="18" r="18" fill="#BC8C81"/>
<circle cx="70" cy="18" r="18" fill="#A54834"/>
</svg>


  );
};
