import cls from "classnames";
import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-scroll";
import { Icons } from "./Icons";

export const PlatformsSideBar = () => {
  const [isShow, setIsShow] = useState(false);

  const isMobile = window.innerWidth < 600;

  const handleToggleIsShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className={cls("relative overflow-hidden transition-margin duration-1000 h-fit rounded-8",{
      "-mb-300 ": isMobile && !isShow,
      "-mb-20 ": !isMobile || isShow,
    })}>
      <div
        onClick={handleToggleIsShow}
        className={"center bg-light-orange sticky p-20 rounded-8 z-10"}
    >
        <p className="text-orange w-fit border-b border-b-orange mobile:border-none pb-6 mobile:pb-0">Introduction</p>
        {isMobile && <Icons.ArrowDown
          className={cls("absolute top-27 right-25 mobile:cursor-pointer duration-500 transition", {
            'rotate-180':  isMobile && isShow
          })}
          onClick={handleToggleIsShow}
        />}
      </div>
      <div
        className={cls(
          "center bg-light-orange sticky p-20 rounded-8 transition duration-1000 absolute top-50%",
          {
            "-translate-y-100%": isMobile && !isShow,
            "-translate-y-10%": !isMobile || isShow,
          }
        )}
      >
        <p className={"my-10 mobile:underline underline-offset-1"}>Best platforms for freelancers</p>
        <div className={"ml-10"}>
          <Link
            activeClass={"active"}
            spy={true}
            to="Upwork"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <p className={"cursor-pointer hover:text-orange"}>Upwork</p>
          </Link>

          <Link
            activeClass="active"
            to="Freelancer"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <p className={"cursor-pointer my-8 hover:text-orange"}>
              Freelancer
            </p>
          </Link>
          <Link
            activeClass="active"
            to="99designs"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <p className={"cursor-pointer hover:text-orange"}>99designs</p>
          </Link>
        </div>
        <p className={"my-10  mobile:underline underline-offset-1"}>Best platforms for job search</p>
        <div className={"ml-10"}>
          <Link
            activeClass="active"
            to="XING"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <p className={"cursor-pointer hover:text-orange"}>XING</p>
          </Link>
          <Link
            activeClass="active"
            to="Indeed"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <p className={"cursor-pointer hover:text-orange my-8"}>Indeed</p>
          </Link>
          <Link
            activeClass="active"
            to="CareerBuilder"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <p className={"cursor-pointer hover:text-orange"}>CareerBuilder</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
