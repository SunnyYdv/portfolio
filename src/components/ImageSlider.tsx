import React, { useEffect, useRef, useState } from "react";
import cls from "classnames";

interface IPropsImageSlider {
  leftImage: string;
  leftImageAlt?: string;
  leftImageLabel?: string;
  rightImageLabelCss?: string;
  leftImageLabelCss?: string;
  onSliderPositionChange?: (position: number) => void;
  rightImage: string;
  rightImageAlt?: string;
  rightImageLabel?: string;
  skeleton?: React.ReactNode;
  separatorColor?: string;
  separatorWidth?: number;
}

export const ImageSlider: React.FC<IPropsImageSlider> = (
  props: IPropsImageSlider
) => {
  const {
    leftImage,
    leftImageAlt = "",
    leftImageLabel = null,
    onSliderPositionChange = () => {},
    rightImage,
    rightImageAlt = "",
    rightImageLabel = null,
    skeleton = null,
    separatorColor = "#ffffff",
    separatorWidth = 2,
    rightImageLabelCss,
    leftImageLabelCss,
  } = props;

  const [leftImgLoaded, setLeftImgLoaded] = useState<boolean>(false);
  const [rightImgLoaded, setRightImgLoaded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLImageElement | null>(null);
  const leftImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const alreadyDone = leftImageRef!.current!.complete;
    alreadyDone && setLeftImgLoaded(true);

    return () => {
      setLeftImgLoaded(false);
    };
  }, [leftImage]);

  useEffect(() => {
    const alreadyDone = rightImageRef?.current!.complete;
    alreadyDone && setRightImgLoaded(true);

    return () => {
      setRightImgLoaded(false);
    };
  }, [rightImage]);

  const allImagesLoaded = rightImgLoaded && leftImgLoaded;

  const сontainerStyle = `box-border relative w-full overflow-hidden h-screen`;
  const leftLabelStyle = `text-white absolute -translate-y-2/4 -translate-x-2/4`;
  const rightLabelStyle = `text-white absolute -translate-y-2/4 -translate-x-2/4`;
  const separatorStyle = `h-full absolute flex grow bg-white w-2 `;

  const styles: { [key: string]: React.CSSProperties } = {
    leftImage: {
      clip: `rect(auto, calc(100vw * 0.3), auto, auto)`,
    },
    rightImage: {
      clip: `rect(auto, auto, auto, calc(100vw * 0.3))`,
    },
    separatorWidth: {
      background: separatorColor,
      flex: "0 1 auto",
      height: "100%",
      position: "absolute",
      width: separatorWidth ? `${separatorWidth}px` : 2,
    },
  };

  return (
    <>
      {skeleton && !allImagesLoaded && (
        <div className={сontainerStyle}>{skeleton}</div>
      )}

      <div
        className={cls(сontainerStyle, {
          hidden: !allImagesLoaded,
        })}
        ref={containerRef}
        data-testid="container"
      >
        <img
          onLoad={() => setRightImgLoaded(true)}
          alt={rightImageAlt}
          data-testid="right-image"
          ref={rightImageRef}
          src={rightImage}
          className={
            "animate-image-right block h-full w-full object-cover absolute "
          }
          style={styles.rightImage}
        />
        <img
          onLoad={() => setLeftImgLoaded(true)}
          alt={leftImageAlt}
          data-testid="left-image"
          ref={leftImageRef}
          src={leftImage}
          className={
            "animate-image-left block h-full w-full object-cover absolute "
          }
          style={styles.leftImage}
        />

        <div className="relative h-full absolute top-0 w-40 animate-separator">
          <div
            className={cls(separatorStyle, {
              [`w-${separatorWidth}`]: separatorWidth,
              [`bg-[${separatorColor}]`]: separatorColor,
            })}
          />

          {leftImageLabel && (
            <div className={"h-full w-full select-none absolute top-50% right-[calc(100vw/3)]"}>
              <div className={cls(leftLabelStyle, leftImageLabelCss)}>
                {leftImageLabel}
              </div>
            </div>
          )}
          {rightImageLabel && (
            <div className={" h-full select-none w-full absolute top-50% left-[calc(100vw/4)]"}>
              <div className={cls(rightLabelStyle, rightImageLabelCss)}>
                {rightImageLabel}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
