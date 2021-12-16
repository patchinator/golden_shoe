import Image from "next/image";

// style + images
import style from "./ItemCard.module.scss";
import timberlandBootsImage from "../../assets/timberland_boots.jpg";

// local imports
import {
  CarouselNextButton,
  CarouselPrevButton,
} from "../UI/Buttons/CarouselButtons";
import CTAButton from "../UI/Buttons/CTAButton";
import InfoButton from "../UI/Buttons/InfoButton";

// fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const DUMMY_DATA = [
  {
    size: 6,
    stock: 6,
    key: "eg1",
  },
  {
    size: 7,
    stock: 0,
    key: "eg2",
  },
  {
    size: 8,
    stock: 11,
    key: "eg3",
  },
  {
    size: 9,
    stock: 4,
    key: "eg4",
  },
  {
    size: 10,
    stock: 0,
    key: "eg5",
  },
  {
    size: 11,
    stock: 0,
    key: "eg6",
  },
  {
    size: 12,
    stock: 12,
    key: "eg7",
  },
  {
    size: 13,
    stock: 3,
    key: "eg8",
  },
];

const ItemCard = (props) => {
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
        <div className={style.price}>
          <strong>£</strong>89.95
        </div>
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
            <strong>Colour:</strong> Brown
          </div>
        </div>
        <div className={style.size}>
          <div className={style.size_header}>Size</div>
          <select name="shoe_size" id="shoe_size">
            <option>Please Select</option>
            {DUMMY_DATA.map((data) => (
              <option
                className={`${data.stock === 0 && style.no_stock}`}
                key={data.key}
              >
                UK {data.size} ({data.stock > 1 ? "in stock" : "out of stock"})
              </option>
            ))}
          </select>
        </div>
        <div className={style.buttons}>
          <div className={style.conversion}>
            <InfoButton onClick={props.showModal}>
              size conversion guide
            </InfoButton>
          </div>
          <div className={style.purchase}>
            <CTAButton>purchase</CTAButton>
          </div>
        </div>
        <div className={style.delivery_estimate}>
          <div>
            Order now and it could arrive before: <strong>Weds 22nd</strong>{" "}
          </div>
        </div>
        <div>
          <div>
            Christmas shopping? Check our delivery guidelines so that you can
            ensure it arrives before the 25th.
          </div>
        </div>
        <div className={style.shipping}>
          <div className={style.shipping_info_one}>
            Need it quick? Select one of our Fast Delivery options at checkout.
          </div>
          <div className={style.shipping_info_two}>Free returns</div>
          <div className={style.shipping_info_three}>T&Cs apply</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
