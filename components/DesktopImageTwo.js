import style from "./DesktopImageTwo.module.scss";
import Image from "next/image";

const DesktopImageTwo = (props) => {
  return (
    <div className={style.image}>
      <Image src={props.image} alt={props.imageAlt} />
      <div className={style.image_text_card}>
        <div>Wrap up warm this December</div>
        <div>mens boots from £49.99</div>
      </div>
      <div className={style.image_text_disclaimer}>
        <div>
          Click to check out what we have in stock. Please note that delivery
          times may be slower due to high demand.
        </div>
      </div>
    </div>
  );
};

export default DesktopImageTwo;
