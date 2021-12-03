import { useState } from "react";

import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPhone,
  faShoePrints,
  faBookOpen,
  faShoppingCart,
  faBars,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/golden_shoe_logo.png";
import Image from "next/image";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.title}>
        <Image src={logo} width="140px" height="50px" alt="Golden Shoe Logo" />
      </div>

      <div className={style.dropdown_button} onClick={dropdownHandler}>
        <FontAwesomeIcon className={style.icon} icon={faBars} />
      </div>

      {showDropdown && (
        <div className={style.dropdown}>
          <div className={style.option}>
            <p>Home</p>
            <FontAwesomeIcon className={style.icon} icon={faHome} />
          </div>
          <div className={style.option}>
            <p>Products</p>
            <FontAwesomeIcon className={style.icon} icon={faShoePrints} />
          </div>
          <div className={style.option}>
            <p>My Account</p>
            <FontAwesomeIcon className={style.icon} icon={faUser} />
          </div>
          <div className={style.option}>
            <p>About</p>
            <FontAwesomeIcon className={style.icon} icon={faBookOpen} />
          </div>
          <div className={style.option}>
            <p>Contact</p>
            <FontAwesomeIcon className={style.icon} icon={faPhone} />
          </div>
        </div>
      )}
      {/* <div className={style.cart}>
        <div className={style.cart_text}>
          <FontAwesomeIcon className={style.icon} icon={faShoppingCart} />
          <p>Your shopping cart:</p>
        </div>
        <div>Shoes: 4 Price: £193.10</div>
      </div> */}
    </nav>
  );
};

export default Navbar;
