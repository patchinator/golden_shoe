import useEmblaCarousel from "embla-carousel-react";
import style from "./Carousel.module.scss";
import Image from "next/image";
import { useCallback } from "react";
import {
  CarouselNextButton,
  CarouselPrevButton,
} from "./Buttons/CarouselButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext(), [emblaApi];
  });

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev(), [emblaApi];
  });

  return (
    <div className={style.carousel} ref={emblaRef}>
      <div className={style.carousel_container}>
        <div className={style.carousel_image_one}>
          <Image src={props.imageOne} alt={props.imageOneAlt} />
          <p className={style.image_one_desc}>{props.imageOneDesc}</p>
        </div>
        <div className={style.carousel_image_two}>
          <Image src={props.imageTwo} alt={props.imageTwoAlt} />
          <p className={style.image_two_desc}>{props.imageTwoDesc}</p>
        </div>
        <div className={style.carousel_image_three}>
          <Image src={props.imageThree} alt={props.imageThreeAlt} />
          <p className={style.image_three_desc}>{props.imageThreeDesc}</p>
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
