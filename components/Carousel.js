import useEmblaCarousel from "embla-carousel-react";
import style from "./Carousel.module.scss";
import Image from "next/image";
import { useCallback, useState } from "react";
import { CarouselNextButton, CarouselPrevButton } from "./UI/CarouselButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import { useEffect } from "react";

const Carousel = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext(), [emblaApi];
  });

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev(), [emblaApi];
  });

  // const onSelect = useCallback(() => {
  //   if (!emblaApi) return;
  //   setPrevBtnEnabled(emblaApi.canScrollPrev());
  //   setNextBtnEnabled(emblaApi.canScrollNext());
  // }, [emblaApi]);

  return (
    <div className={style.carousel} ref={emblaRef}>
      <div className={style.carousel_container}>
        <div className={style.carousel_image}>
          <Image src={props.imageOne} alt={props.imageOneAlt} />
        </div>
        <div className={style.carousel_image}>
          <Image src={props.imageTwo} alt={props.imageTwoAlt} />
        </div>
        <div className={style.carousel_image}>
          <Image src={props.imageThree} alt={props.imageThreeAlt} />
        </div>
      </div>
      <CarouselNextButton className={style.button_next} onClick={scrollNext}>
        <FontAwesomeIcon icon={faArrowRight} width="1.5rem" />
      </CarouselNextButton>
      <CarouselPrevButton className={style.button_prev} onClick={scrollPrev}>
        <FontAwesomeIcon icon={faArrowLeft} width="1.5rem" />
      </CarouselPrevButton>
    </div>
  );
};

export default Carousel;
