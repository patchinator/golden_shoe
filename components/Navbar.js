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

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.title}>Golden Shoe</div>
      <div className={style.options}>
        <div className={style.option}>
          <FontAwesomeIcon width="1.25rem" icon={faHome} />
          <p>Home</p>
        </div>
        <div className={style.option}>
          <FontAwesomeIcon width="1.25rem" icon={faShoePrints} />
          <p>Products</p>
        </div>
        <div className={style.option}>
          <FontAwesomeIcon width="1.25rem" icon={faUser} />
          <p>My Account</p>
        </div>
        <div className={style.option}>
          <FontAwesomeIcon width="1.25rem" icon={faBookOpen} />
          <p>About</p>
        </div>
        <div className={style.option}>
          <FontAwesomeIcon width="1.25rem" icon={faPhone} />
          <p>Contact</p>
        </div>
        <div className={style.cart}>
          <div className={style.cart_text}>
            <FontAwesomeIcon width="1.25rem" icon={faShoppingCart} />
            <p>Your shopping cart</p>
          </div>
          <div>Shoes: 4 Price: £193.10</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
