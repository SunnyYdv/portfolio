import "./styles/app.css";
import "@total-typescript/ts-reset";
import React, { ReactElement } from "react";
import { createRoot } from "react-dom/client";
import Router from "Router";


const appContainer = document.getElementById("root");
const root = createRoot(appContainer!);

const App = (): ReactElement => {
  return <Router/>
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// useEffect(() => {
  //   const handleSliding = (event: MouseEvent | TouchEvent) => {
  //     const e = event || window.event;

  //     // Calc cursor position from the:
  //     let cursorXfromViewport;
  //     let cursorYfromViewport;

  //     if ("touches" in event) {
  //       cursorXfromViewport = event.touches[0].pageX;
  //       cursorYfromViewport = event.touches[0].pageY;
  //     } else {
  //       cursorXfromViewport = event.pageX;
  //       cursorYfromViewport = event.pageY;
  //     }

  //     // Calc Cursor Position from the:
  //     // to consider any page scrolling
  //     const cursorXfromWindow = cursorXfromViewport - window.pageXOffset;

  //     // Calc Cursor Position from the:
  //     const imagePosition = rightImageRef?.current!.getBoundingClientRect();
  //     let pos = cursorXfromWindow - imagePosition.left;

  //     // Set minimum and maximum values to prevent the slider from overflowing
  //     const minPos = 0 + separatorWidth / 2;
  //     const maxPos = containerWidth - separatorWidth / 2;

  //     if (pos < minPos) pos = minPos;
  //     if (pos > maxPos) pos = maxPos;

  //     setSliderPosition(pos / containerWidth);

  //     // If there's a callback function, invoke it everytime the slider changes
  //     if (onSliderPositionChange) {
  //       onSliderPositionChange(pos / containerWidth);
  //     }
  //   };

  //   const startSliding = (e: MouseEvent) => {
  //     // Prevent default behavior other than mobile scrolling
  //     if (!("touches" in e)) {
  //       e.preventDefault();
  //     }

  //     // Slide the image even if you just click or tap (not drag)
  //     handleSliding(e);

  //     window.addEventListener("mousemove", handleSliding); // 07
  //     window.addEventListener("touchmove", handleSliding); // 08
  //   };

  //   const finishSliding = () => {
  //     window.removeEventListener("mousemove", handleSliding);
  //     window.removeEventListener("touchmove", handleSliding);
  //   };

  //   const containerElement = containerRef.current;

  //   if (allImagesLoaded && containerElement) {
  //     // it's necessary to reset event handlers each time the canvasWidth changes

  //     // for mobile
  //     containerElement.addEventListener("touchstart", startSliding); // 01
  //     window.addEventListener("touchend", finishSliding); // 02

  //     // for desktop
  //     if (hover) {
  //       containerElement.addEventListener("mousemove", handleSliding); // 03
  //       containerElement.addEventListener("mouseleave", finishSliding); // 04
  //     } else {
  //       containerElement.addEventListener("mousedown", startSliding); // 05
  //       window.addEventListener("mouseup", finishSliding); // 06
  //     }

  //   }

  //   return () => {
  //     // cleanup all event resteners
  //     containerElement?.removeEventListener("touchstart", startSliding); // 01
  //     window.removeEventListener("touchend", finishSliding); // 02
  //     containerElement?.removeEventListener("mousemove", handleSliding); // 03
  //     containerElement?.removeEventListener("mouseleave", finishSliding); // 04
  //     containerElement?.removeEventListener("mousedown", startSliding); // 05
  //     window.removeEventListener("mouseup", finishSliding); // 06
  //     window.removeEventListener("mousemove", handleSliding); // 07
  //     window.removeEventListener("touchmove", handleSliding); // 08
  //   };
  // }, [
  //   allImagesLoaded,
  //   containerHeight,
  //   containerWidth,
  //   hover,
  //   separatorWidth,
  // ]);