import cls from "classnames";
import React, { Ref, useState } from "react";
import { Link } from "react-scroll";
import { Icons } from "./Icons";

export const PlatformsSideBar = () => {
  const [isShow, setIsShow] = useState(false);

  const isTablet = window.innerWidth < 900;

  const handleToggleIsShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div
      className={cls(
        " sticky top-150 tablet:relative tablet:overflow-hidden pb-20 tablet:top-0 transition-margin duration-1000 h-fit rounded-8",
        {
          "-mb-[22rem] ": isTablet && !isShow,
          "-mb-[0.6rem] ": isTablet && isShow
        }
      )}
    >
      <div
        onClick={handleToggleIsShow}
        className={"center sticky bg-light-orange p-20 rounded-8 z-10"}
      >
        <p className="text-orange w-fit font-semibold pb-6 mobile:pb-0">
          Table of contents
        </p>
        {isTablet && (
          <Icons.ArrowDown
            className={
              "absolute text-orange top-27 right-25 mobile:cursor-pointer "
            }
            onClick={handleToggleIsShow}
          />
        )}
      </div>
      <div
        className={cls(
          " center bg-light-orange sticky p-20 rounded-8 transition duration-1000 absolute top-50%",
          {
            "-translate-y-100% opacity-0": isTablet && !isShow,
            "-translate-y-[2rem]": !isTablet && !isShow ,
            "translate-y-[5px]  ": isTablet && isShow,
            // " translate-y-10%": isTablet && isShow,
          }
        )}
      >
        {isTablet && (
          <p className="text-orange font-semibold pb-6 mobile:pb-0">
            Table of contents
          </p>
        )}
        {isTablet && (
          <div
          onClick={handleToggleIsShow}
          >

          <Icons.ArrowDown
            className={
              "absolute text-orange top-27 right-25 mobile:cursor-pointer rotate-180"
            }
            />
            </div>
        )}
        <p className={"my-10 mobile:underline underline-offset-1"}>
          Best platforms for freelancers
        </p>
        <div className={"ml-10"}>
          <Link
            activeClass={"active"}
            spy={true}
            to="Upwork"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <div className="w-fit group/item">
              <p className={"cursor-pointer"}>Upwork</p>
              <div className="border-b border-black group-hover/item:animate-side-bar"></div>
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Freelancer"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <div className="w-fit group/item my-8">
              <p className={"cursor-pointer"}>Freelancer</p>
              <div className="border-b border-black group-hover/item:animate-side-bar"></div>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="99designs"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <div className="w-fit group/item">
              <p className={"cursor-pointer"}>99designs</p>
              <div className="border-b border-black group-hover/item:animate-side-bar"></div>
            </div>
          </Link>
        </div>
        <p className={"my-10  mobile:underline underline-offset-1"}>
          Best platforms for job search
        </p>
        <div className={"ml-10"}>
          <Link
            activeClass="active"
            to="XING"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <div className="w-fit group/item">
              <p className={"cursor-pointer"}>XING</p>
              <div className="border-b border-black group-hover/item:animate-side-bar"></div>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="Indeed"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <div className="w-fit group/item my-8">
              <p className={"cursor-pointer"}>Indeed</p>
              <div className="border-b border-black group-hover/item:animate-side-bar"></div>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="CareerBuilder"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <div className="w-fit group/item">
              <p className={"cursor-pointer"}>CareerBuilder</p>
              <div className="border-b border-black group-hover/item:animate-side-bar"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
