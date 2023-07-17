import React from "react";
import cls from "classnames";
import { IconProps } from "..";

export const Star: React.FC<IconProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 0L20.4565 15.5435L36 18L20.4565 20.4565L18 36L15.5435 20.4565L0 18L15.5435 15.5435L18 0Z"
        fill=""
      />
    </svg>
  );
};
