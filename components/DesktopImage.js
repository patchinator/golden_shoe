import style from "./DesktopImage.module.scss";
import Image from "next/image";

const DesktopImage = (props) => {
  return (
    <div className={style.image}>
      <Image src={props.image} alt={props.imageAlt} />
      <div className={style.image_text_card}>
        <div>Winter sales have arrived!</div>
        <div>20% off until Jan 2nd</div>
      </div>
      <div className={style.image_text_disclaimer}>
        <div>
          20% off only applies when £50 or more is spent online. Terms and
          Conditions apply. For more information check out T&C on our website.
        </div>
      </div>
    </div>
  );
};

export default DesktopImage;
