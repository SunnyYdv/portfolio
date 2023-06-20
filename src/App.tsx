import React, { useEffect, useState } from "react";

import ReactCompareImage from "./ImageSlider";

import logo from "./images/png.webp";
import logo1 from "./images/png1.png";


export const App = () => {
  const [png, setPng] = useState("-0px");



  const funs = (pos: number) => {
    console.log('pos: ', pos);
     setPng(`${(-(pos) * 200) +100 }px`);

  };

  return (
    <div className="">
      app
      <div className=" mx-auto relative overflow-hidden ">
        <img
          src={logo}
          style={{  transform: `translateX(${png}) scaleX(120%)`, transitionTimingFunction: 'ease-in-out', transitionDuration:'480ms', transitionDelay: '100ms' }}
          className="  pointer-events-none opacity-20 object-cover transition z-10 top-0 right-0  bottom-0  left-0 absolute w-full h-full"
        />      
          <img
          src={logo1}
          style={{  transform: `translateX(${png}) scaleX(120%)`, transitionTimingFunction: 'ease-in-out', transitionDuration:'400ms' }}
          className="pointer-events-none opacity-40  object-cover transition z-10 top-0 -mr-100 -right-250 bottom-0 left-0 absolute w-full h-full"
        />
        <ReactCompareImage
          leftImage="https://i.stack.imgur.com/KfvD5.png"
          rightImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4ZfzLnbDwiQr9SYOuck0IIsfgX1yRb3PLw&usqp=CAU"
          handleSize={35}
          leftImageLabel={"FREELANCE"}
          rightImageLabel={"OFFICE"}
          rightImageLabelCss={"tracking-[10px] text-32 "}
          leftImageLabelCss={`tracking-[10px] text-32 after:content-main after:z-10 after:absolute after:top-0 after:left-0 after:w-full after:right-0 after:bottom-0`}
          handleStyle={"absolute top-[85%]"}
          leftImageCss={`after:content-['ADWDASDFASF'] after:text-red-500 after:absolute after:top-0 after:left-0`}
          onSliderPositionChange={(pos) => funs(pos)}
        //   hover
        />
      </div>
    </div>
  );
};
