import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  aspectRatio?: 'taller' | 'wider';
  handle?: React.ReactNode;
  handleSize?: number;
  handleStyle?: string;
  hover?: boolean;
  leftImage: string;
  leftImageAlt?: string;
  leftImageCss?: string;
  leftImageLabel?: string;
  rightImageLabelCss?: string;
  leftImageLabelCss?: string;
  onSliderPositionChange?: (position: number) => void;
  rightImage: string;
  rightImageAlt?: string;
  rightImageCss?: string;
  rightImageLabel?: string;
  skeleton?: React.ReactNode;
  sliderLineColor?: string;
  sliderLineWidth?: number;
  sliderPositionPercentage?: number;
  vertical?: boolean;
}

const ReactCompareImage: React.FC<IProps> = (props: IProps) => {
  const {
    aspectRatio = 'taller',
    handle = null,
    handleSize = 40,
    handleStyle,
    hover = false,
    leftImage,
    leftImageAlt = '',
    leftImageCss = '',
    leftImageLabel = null,
    onSliderPositionChange = () => {},
    rightImage,
    rightImageAlt = '',
    rightImageCss = '',
    rightImageLabel = null,
    skeleton = null,
    sliderLineColor = '#ffffff',
    sliderLineWidth = 2,
    sliderPositionPercentage = 0.5,
    vertical = false,
    rightImageLabelCss,
    leftImageLabelCss,

  } = props;

  const horizontal = !vertical;

  // 0 to 1
  const [sliderPosition, setSliderPosition] = useState<number>(
    sliderPositionPercentage,
  );
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [leftImgLoaded, setLeftImgLoaded] = useState<boolean>(false);
  const [rightImgLoaded, setRightImgLoaded] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLImageElement | null>(null);
  const leftImageRef = useRef<HTMLImageElement | null>(null);

  // make the component responsive
  useEffect(() => {
    const containerElement = containerRef.current;
    const resizeObserver = new ResizeObserver(([entry, ..._]) => {
      const currentContainerWidth = entry.target.getBoundingClientRect().width;
      setContainerWidth(currentContainerWidth);
    });
    resizeObserver.observe(containerElement!);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    // consider the case where loading image is completed immediately
    // due to the cache etc.
    const alreadyDone = leftImageRef!.current!.complete;
    alreadyDone && setLeftImgLoaded(true);

    return () => {
      // when the left image source is changed
      setLeftImgLoaded(false);
    };
  }, [leftImage]);

  useEffect(() => {
    // consider the case where loading image is completed immediately
    // due to the cache etc.
    const alreadyDone = rightImageRef?.current!.complete;
    alreadyDone && setRightImgLoaded(true);

    return () => {
      // when the right image source is changed
      setRightImgLoaded(false);
    };
  }, [rightImage]);

  const allImagesLoaded = rightImgLoaded && leftImgLoaded;

  useEffect(() => {
    const handleSliding = (event: MouseEvent | TouchEvent) => {
      const e = event || window.event;

      // Calc cursor position from the:
      // - left edge of the viewport (for horizontal)
      // - top edge of the viewport (for vertical)
  
      const cursorXfromViewport = e.touches ? e.touches[0].pageX : e.pageX;
      const cursorYfromViewport = e.touches ? e.touches[0].pageY : e.pageY;

      // Calc Cursor Position from the:
      // - left edge of the window (for horizontal)
      // - top edge of the window (for vertical)
      // to consider any page scrolling
      const cursorXfromWindow = cursorXfromViewport - window.pageXOffset;
      const cursorYfromWindow = cursorYfromViewport - window.pageYOffset;

      // Calc Cursor Position from the:
      // - left edge of the image(for horizontal)
      // - top edge of the image(for vertical)
      const imagePosition = rightImageRef?.current!.getBoundingClientRect();
      let pos = horizontal
        ? cursorXfromWindow - imagePosition.left
        : cursorYfromWindow - imagePosition.top;

      // Set minimum and maximum values to prevent the slider from overflowing
      const minPos = 0 + sliderLineWidth / 2;
      const maxPos = horizontal
        ? containerWidth - sliderLineWidth / 2
        : containerHeight - sliderLineWidth / 2;

      if (pos < minPos) pos = minPos;
      if (pos > maxPos) pos = maxPos;

      horizontal
        ? setSliderPosition(pos / containerWidth)
        : setSliderPosition(pos / containerHeight);

      // If there's a callback function, invoke it everytime the slider changes
      if (onSliderPositionChange) {
        horizontal
          ? onSliderPositionChange(pos / containerWidth)
          : onSliderPositionChange(pos / containerHeight);
      }
    };

    const startSliding = (e: MouseEvent) => {
      // Prevent default behavior other than mobile scrolling
      if (!('touches' in e)) {
        e.preventDefault();
      }

      // Slide the image even if you just click or tap (not drag)
      handleSliding(e);

      window.addEventListener('mousemove', handleSliding); // 07
      window.addEventListener('touchmove', handleSliding); // 08
    };

    const finishSliding = () => {
      window.removeEventListener('mousemove', handleSliding);
      window.removeEventListener('touchmove', handleSliding);
    };

    const containerElement = containerRef.current;

    if (allImagesLoaded && containerElement) {
      // it's necessary to reset event handlers each time the canvasWidth changes

      // for mobile
      containerElement.addEventListener('touchstart', startSliding); // 01
      window.addEventListener('touchend', finishSliding); // 02

      // for desktop
      if (hover) {
        containerElement.addEventListener('mousemove', handleSliding); // 03
        containerElement.addEventListener('mouseleave', finishSliding); // 04
      } else {
        containerElement.addEventListener('mousedown', startSliding); // 05
        window.addEventListener('mouseup', finishSliding); // 06
      }

      // calc and set the container's size
      const leftImageWidthHeightRatio =
        leftImageRef?.current!.naturalHeight / leftImageRef?.current!.naturalWidth;
      const rightImageWidthHeightRatio =
        rightImageRef?.current!.naturalHeight /
        rightImageRef?.current!.naturalWidth;

      const idealWidthHeightRatio =
        aspectRatio === 'taller'
          ? Math.max(leftImageWidthHeightRatio, rightImageWidthHeightRatio)
          : Math.min(leftImageWidthHeightRatio, rightImageWidthHeightRatio);

      const idealContainerHeight = containerWidth * idealWidthHeightRatio;

      setContainerHeight(idealContainerHeight);
    }

    return () => {
      // cleanup all event resteners
      containerElement?.removeEventListener('touchstart', startSliding); // 01
      window.removeEventListener('touchend', finishSliding); // 02
      containerElement?.removeEventListener('mousemove', handleSliding); // 03
      containerElement?.removeEventListener('mouseleave', finishSliding); // 04
      containerElement?.removeEventListener('mousedown', startSliding); // 05
      window.removeEventListener('mouseup', finishSliding); // 06
      window.removeEventListener('mousemove', handleSliding); // 07
      window.removeEventListener('touchmove', handleSliding); // 08
    };
    // eslint-disable-next-line
  }, [
    allImagesLoaded,
    aspectRatio,
    containerHeight,
    containerWidth,
    horizontal,
    hover,
    sliderLineWidth,
    vertical,
  ]);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
      height: `${containerHeight}px`,
      overflow: 'hidden',
    },
    rightImage: {
      clip: horizontal
        ? `rect(auto, auto, auto, ${containerWidth * sliderPosition}px)`
        : `rect(${containerHeight * sliderPosition}px, auto, auto, auto)`,
      display: 'block',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      width: '100%'
    },
    leftImage: {
      clip: horizontal
        ? `rect(auto, ${containerWidth * sliderPosition}px, auto, auto)`
        : `rect(auto, auto, ${containerHeight * sliderPosition}px, auto)`,
      display: 'block',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      width: '100%'
    },
    slider: {
      alignItems: 'center',
      cursor:
        (!hover && horizontal && 'ew-resize') ||
        (!hover && !horizontal && 'ns-resize'),
      display: 'flex',
      flexDirection: horizontal ? 'column' : 'row',
      height: horizontal ? '100%' : `${handleSize}px`,
      justifyContent: 'center',
      left: horizontal
        ? `${containerWidth * sliderPosition - handleSize / 2}px`
        : 0,
      position: 'absolute',
      top: horizontal
        ? 0
        : `${containerHeight * sliderPosition - handleSize / 2}px`,
      width: horizontal ? `${handleSize}px` : '100%',
    },
    line: {
      background: sliderLineColor,
      flex: '0 1 auto',
      height:  '100%' ,
      position: 'absolute',
      width: sliderLineWidth ? `${sliderLineWidth}px` : 2,
    },
    handleCustom: {
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flex: '1 0 auto',
      height: 'auto',
      justifyContent: 'center',
      width: 'auto',
    },
    handleDefault: {
      alignItems: 'center',
      border: `${sliderLineWidth}px solid ${sliderLineColor}`,
      background: sliderLineColor,
      borderRadius: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      height: `${handleSize}px`,
      width: `${handleSize}px`,
    },
    leftArrow: {
      border: `inset ${handleSize * 0.15}px rgba(0,0,0,0)`,
      borderRight: `${handleSize * 0.15}px solid ${sliderLineColor}`,
      height: '0px',
      marginLeft: `-${handleSize * 0.25}px`, // for IE11
      marginRight: `${handleSize * 0.25}px`,
      left: `-${handleSize - 30}px`,
      position: 'absolute',
      width: '0px',
    },
    rightArrow: {
      border: `inset ${handleSize * 0.15}px rgba(0,0,0,0)`,
      borderLeft: `${handleSize * 0.15}px solid ${sliderLineColor}`,
      height: '0px',
      marginRight: `-${handleSize * 0.25}px`, // for IE11
      width: '0px',
      position: 'absolute',
      right: `-${handleSize - 30}px`,
    },
    leftLabel: {
      color: 'white',
      position: 'absolute', 
      transform: 'translate(-50%, -50%)'
    },
    rightLabel: {
      color: 'white',
      position: 'absolute', 
      transform: 'translate(-50%, -50%)'
    },
    leftLabelContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute', 
      right: `${containerWidth/2}%`,
      top: `50%`,
    },
    rightLabelContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute', 
      left: `${containerWidth/2}%`,
      top: `50%`,
    },
};

  return (
    <>
      {skeleton && !allImagesLoaded && (
        <div style={{ ...styles.container }}>{skeleton}</div>
      )}

      <div
        style={{
          ...styles.container,
          display: allImagesLoaded ? 'block' : 'none',
        }}
        ref={containerRef}
        data-testid="container"
      >
        <img
          onLoad={() => setRightImgLoaded(true)}
          alt={rightImageAlt}
          data-testid="right-image"
          ref={rightImageRef}
          src={rightImage}
          style={styles.rightImage}
          className={rightImageCss}
        />
        <img
          onLoad={() => setLeftImgLoaded(true)}
          alt={leftImageAlt}
          data-testid="left-image"
          ref={leftImageRef}
          src={leftImage}
          style={styles.leftImage}
          className={leftImageCss}
        />
        <div style={styles.slider} className='relative'>
          <div style={styles.line} />
          {handle ? (
            <div style={styles.handleCustom} className={handleStyle}>{handle}</div>
          ) : (
            <div style={styles.handleDefault} className={handleStyle}>
              <div style={styles.leftArrow} />
              <div style={styles.rightArrow} />
            </div>
          )}
          {leftImageLabel && (
          <div style={styles.leftLabelContainer}>
            <div style={styles.leftLabel} className={leftImageLabelCss}>{leftImageLabel}</div>
          </div>
        )}
        {rightImageLabel && (
          <div style={styles.rightLabelContainer}>
            <div style={styles.rightLabel} className={rightImageLabelCss}>{rightImageLabel}</div>
          </div>
        )}
        </div>
        {/* labels */}

      </div>
    </>
  );
};

export default ReactCompareImage;

