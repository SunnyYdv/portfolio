import cls from "classnames";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export const Footer = () => {
  const navigate = useNavigate();

  const toHome = useCallback(() => {
    navigate("/home");
  }, []);

  return (
    <div className={"w-full bg-red-10 py-55 px-50 mobile:px-16 mobile:py-20 pt-100 mobile:pt-80"}>
      <div
        className={"flex text-page justify-between items-stretch items-center "}
      >
        <div
          className={
            "flex mobile:flex-col mobile:items-start mobile:justify-start space-x-100 mobile:space-x-0 text-white"
          }
        >
          <a onClick={toHome}>
            <img
              className={"w-58 h-58 cursor-pointer mobile:hidden"}
              src="logoFooter.png"
              alt=""
            />
          </a>
          <div className="mobile:mb-15">
            <p className={"text-12 font-thin"}>Number</p>
            <a
              href="tel:+12123542132"
              className={"text-20 mobile:text-16 cursor-pointer "}
            >
              +1 212 354 2132
            </a>
          </div>

          <div>
            <p className={"text-12 font-thin"}>Email</p>
            <a
              href={"mailto:freelance_office@gmail.com"}
              className={"text-20 mobile:text-16  cursor-pointer"}
            >
              freelance_office@gmail.com
            </a>
          </div>
        </div>

        <div className="flex mobile:flex-col space-y-15">
          <a onClick={toHome}>
            <img
              className={"w-38 h-38 cursor-pointer hidden mobile:block"}
              src="logoFooter.png"
              alt=""
            />
          </a>

          <div className={" tracking-wide"}>
            <p className={"text-12 opacity-80"}>Developed by </p>
            <a className={"text-20 cursor-pointer transition opacity-80 hover:opacity-100"} href="https://brightlab.me/">Brightlab</a>
          </div>
        </div>
      </div>
    </div>
  );
};
