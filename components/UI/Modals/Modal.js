import style from "./Modal.module.scss";
import Image from "next/image";
import shoeSizeImage from "../../../assets/shoe_size_conversion.png";

const Modal = (props) => {
  return (
    <div onClick={props.hideModal} className={style.modal_backdrop}>
      <div className={style.modal}>
        <div className={style.title}>Mens & Womens Footwear size guide</div>
        <h3>Size chart</h3>
        <div className={style.size_chart}>
          <Image src={shoeSizeImage} alt="Shoe size conversion guide" />
        </div>
        <h3>How to measure your feet</h3>
        <div className={style.measure_guide}>
          <ol>
            <li>
              Place your foot on a peice of paper with your heel slightly
              touching a wall behind.
            </li>
            <li>
              Mark the end of your longest toe (you may need assistance from a
              friend) and measure from the wall to the marking.
            </li>
            <li>
              Do the same for the other foot and compare measurements with the
              size chart above to get the right shoe size.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Modal;
