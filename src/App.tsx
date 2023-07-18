import { Header, ImageSlider } from "components";

export const App = () => {
  return (
    <div className="">
      <Header />
      <div className=" mx-auto relative overflow-hidden ">
        <img
          src={"geometry.webp"}
          className="animate-geometry-1 pointer-events-none object-cover mobile:object-scale-down transition z-10 top-0 right-0  bottom-0  left-0 absolute w-full h-full"
        />
        <img
          src={"geometry2.webp"}
          className="animate-geometry-2 pointer-events-none object-cover transition z-10 top-0 mobile:object-scale-down bottom-0 left-0 right-0 absolute w-full h-full"
        />
        <ImageSlider
          leftImage="freelance.webp"
          rightImage="office.webp"
          leftImageLabel={"FREELANCE"}
          rightImageLabel={"OFFICE"}
          rightImageLabelCss={
            "tracking-[18px] text-46 mobile:tracking-wide mobile:text-20 mobile:font-bold"
          }
          leftImageLabelCss={'tracking-[18px] text-46 mobile:tracking-wide  mobile:text-20 mobile:font-bold'}
        />
      </div>
    </div>
  );
};
