import cls from "classnames";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const toBlog = useCallback(() => {
    navigate("/blog");
  }, []);

  return (
    <nav
      className={cls(
        "fixed  z-20 text-24 mobile:text-20 flex items-center gap-x-20 p-20 px-40 justify-between w-full ",
        {
          "text-black": location.pathname.includes("blog"),
          "text-white ": !location.pathname.includes("blog"),
        }
      )}
    >
      <img src="fhLogo.svg" />
      <div className="space-x-20">
        <span onClick={toBlog} className="cursor-pointer">
          Blog
        </span>
        <span className="cursor-pointer ">About</span>
        <span className="cursor-pointer">Contact</span>
      </div>
    </nav>
  );
};
