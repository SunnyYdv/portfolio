import cls from "classnames";
import React, { useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const progressRef = useRef<HTMLDivElement>(null);

  const toBlog = useCallback(() => {
    navigate("/blog");
  }, []);

  const toPlatforms = useCallback(() => {
    navigate("/platforms");
  }, []);

  const toAbouts = useCallback(() => {
    navigate("/about");
  }, []);

  const toHome = useCallback(() => {
    navigate("/home");
  }, []);

  useEffect(() => {
    if (location.pathname.includes("home")) return;

    function scrollProgressBar() {
      const scrollTop = document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / height) * 100;

      progressRef.current && (progressRef.current.style.width = scrolled + "%");
    }

    window.addEventListener("scroll", () => scrollProgressBar());

    return window.removeEventListener("scroll", () => scrollProgressBar());
  }, [location]);

  return (
    <div
      className={cls(
        "fixed z-20 text-24 mobile:text-20  max-w-screen  flex flex-col overflow-hidden w-full ",
        {
          "text-black bg-page": !location.pathname.includes("home"),
          "text-white bg-none ": location.pathname.includes("home"),
        }
      )}
    >
      <nav
        className={cls(
          " flex  items-center gap-x-20 p-20 px-40 mobile:px-20 justify-between w-full ",
          {
            "text-black bg-page": !location.pathname.includes("home"),
            "text-white bg-none ": location.pathname.includes("home"),
          }
        )}
      >
        <img onClick={toHome} src="fhLogo.svg" className="cursor-pointer" />

        <div className="space-x-40 mobile:space-x-20 mobile:text-16 font-thin">
          <span
            onClick={toBlog}
            className={cls("cursor-pointer", {
              "text-orange border-b pb-10 border-b-orange border-b-2 ":
                location.pathname.includes("blog"),
            })}
          >
            How it works
          </span>
          <span
            onClick={toPlatforms}
            className={cls("cursor-pointer", {
              "text-orange border-b pb-10 border-b-orange border-b-2 ":
                location.pathname.includes("platforms"),
            })}
          >
            Platforms
          </span>
          <span
            onClick={toAbouts}
            className={cls("cursor-pointer", {
              "text-orange border-b pb-10 border-b-orange border-b-2 ":
                location.pathname.includes("about"),
            })}
          >
            About
          </span>
        </div>
      </nav>
      {!location.pathname.includes("home") && (
        <div className="px-20">
          <div
            ref={progressRef}
            className="h-6 bg-orange rounded-30 "
          />
        </div>
      )}
    </div>
  );
};
