import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPhone,
  faShoePrints,
  faBookOpen,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/golden_shoe_logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.title}>
        <Image src={logo} width="140px" height="50px" alt="Golden Shoe Logo" />
      </div>
      <div className={style.options}>
        <div className={style.option}>
          <p>Home</p>
          <FontAwesomeIcon width="1.25rem" icon={faHome} />
        </div>
        <div className={style.option}>
          <p>Products</p>
          <FontAwesomeIcon width="1.25rem" icon={faShoePrints} />
        </div>
        <div className={style.option}>
          <p>My Account</p>
          <FontAwesomeIcon width="1.25rem" icon={faUser} />
        </div>
        <div className={style.option}>
          <p>About</p>
          <FontAwesomeIcon width="1.25rem" icon={faBookOpen} />
        </div>
        <div className={style.option}>
          <p>Contact</p>
          <FontAwesomeIcon width="1.25rem" icon={faPhone} />
        </div>
        <div className={style.cart}>
          <div className={style.cart_text}>
            <FontAwesomeIcon width="1.25rem" icon={faShoppingCart} />
            <p>Your shopping cart:</p>
          </div>
          <div>Shoes: 4 Price: £193.10</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
