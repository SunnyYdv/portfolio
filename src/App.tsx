import { Header, ImageSlider, Footer } from "components";
import { useState } from "react";


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
          src={'geometry.webp'}
          className="animate-geometry-1 pointer-events-none object-cover mobile:object-scale-down transition z-10 top-0 right-0  bottom-0  left-0 absolute w-full h-full"
        />      
          <img
          src={'geometry2.webp'}
          className="animate-geometry-2 pointer-events-none object-cover transition z-10 top-0 mobile:object-scale-down bottom-0 left-0 right-0 absolute w-full h-full"
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
