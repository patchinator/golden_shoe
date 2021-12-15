import style from "./ItemCard.module.scss";

import Image from "next/image";
import timberlandBootsImage from "../../assets/timberland_boots.jpg";
import { CarouselNextButton, CarouselPrevButton } from "../UI/CarouselButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const ItemCard = () => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image src={timberlandBootsImage} alt="timberland boots" />
        <CarouselPrevButton className={style.button_right}>
          <FontAwesomeIcon icon={faArrowRight} />
        </CarouselPrevButton>
        <CarouselNextButton className={style.button_left}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </CarouselNextButton>
      </div>
      <div className={style.info}>
        <div className={style.title}>Timberland Boots in Brown</div>
        <div className={style.price}>£89.95</div>
        <div className={style.installment}>
          Or 3 payments of 29.98 interest free
        </div>
        <div className={style.discount}>
          <FontAwesomeIcon className={style.discount_icon} icon={faTag} />
          <div className={style.discount_text}>
            New customer? Get <strong>15%</strong> off your first purchase with
            us using <strong>GOLDENEW</strong> promo code
          </div>
        </div>
        <div className={style.color}>
          <div>
            <strong>Color:</strong> Brown
          </div>
        </div>
        <div className={style.size}>
          <select name="shoe_size" id="shoe_size">
            <option value="sm">UK Size 6</option>
            <option value="md">UK Size 7</option>
            <option value="lg">UK Size 8</option>
            <option value="lg">UK Size 9</option>
            <option value="lg">UK Size 10</option>
            <option value="lg">UK Size 11</option>
            <option value="lg">UK Size 12</option>
            <option value="lg">UK Size 12</option>
          </select>
        </div>
        <div className={style.buttons}>
          <button>Size conversion</button>
          <button>Purchse</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
