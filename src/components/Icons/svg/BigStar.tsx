import React from "react";
import cls from "classnames";
import { IconProps } from "..";

export const BigStar: React.FC<IconProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 0L24.0802 0.507391C25.9851 12.561 35.439 22.0149 47.4926 23.9198L48 24L47.4926 24.0802C35.439 25.9851 25.9851 35.439 24.0802 47.4926L24 48L23.9198 47.4926C22.0149 35.439 12.5611 25.9851 0.50739 24.0802L0 24L0.507391 23.9198C12.5611 22.0149 22.0149 12.561 23.9198 0.50739L24 0Z"
        fill=""
      />
    </svg>
  );
};
