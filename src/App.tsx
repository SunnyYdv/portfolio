import { Header, ImageSlider } from "components";
import React, { useEffect, useState } from "react";


export const App = () => {
  const [translateXPosition, setTranslateXPosition] = useState("-0px");

  const handleOnSliderPositionChange = (pos: number) => {
    setTranslateXPosition(`${(-(pos) * 200) +100 }px`);
  };

  return (
    <div className="">
      <Header/>
      <div className=" mx-auto relative overflow-hidden ">
        <img
          src={'png.webp'}
          style={{  transform: `translateX(${translateXPosition}) scaleX(120%)`, transitionTimingFunction: 'ease-in-out', transitionDuration:'480ms' }}
          className="  pointer-events-none opacity-20 object-cover transition z-10 top-0 right-0  bottom-0  left-0 absolute w-full h-full"
        />      
          <img
          src={'png1.png'}
          style={{  transform: `translateX(${translateXPosition}) scaleX(120%)`, transitionTimingFunction: 'ease-in-out', transitionDuration:'400ms' }}
          className="pointer-events-none opacity-40  object-cover transition z-10 top-0 -mr-100 -right-250 bottom-0 left-0 absolute w-full h-full"
        />
        <ImageSlider
          leftImage="freelance.webp"
          rightImage="office.webp"
          leftImageLabel={"FREELANCE"}
          rightImageLabel={"OFFICE"}
          rightImageLabelCss={"tracking-[18px] text-46 mobile:tracking-tight mobile:text-40"}
          leftImageLabelCss={`tracking-[18px] text-46 mobile:tracking-tight  mobile:text-40`}

          onSliderPositionChange={(position) => handleOnSliderPositionChange(position)}
        />
      </div>
    </div>
  );
};
