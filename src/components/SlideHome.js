import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

import imageSlide1 from "../../public/images/Banner-LP-Tuyen-sinh-7-2016-1.jpg";
import imageSlide2 from "../../public/images/LTMT-banner.jpg";
import imageSlide3 from "../../public/images/a371612539d94df1f98c6177cc7dd0fauiE6JYRiJ2gZKKNc-0.jpg";

const items = [
  {
    src: imageSlide1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: imageSlide2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: imageSlide3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

const SlideHome = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default SlideHome;
