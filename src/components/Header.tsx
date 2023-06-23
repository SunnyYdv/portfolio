import React from "react";

export const Header = () => {
  return (
    <nav className="absolute text-white top-0 z-20 text-24 mobile:text-20 flex gap-x-20 p-20 px-40 justify-end w-full ">
      <span className="cursor-pointer">Blog</span>
      <span className="cursor-pointer ">About</span>
      <span className="cursor-pointer">Partner</span>
      <span className="cursor-pointer">Contact</span>
    </nav>
  );
};
