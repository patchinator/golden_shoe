// Hooks & Next
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Internal Imports
import style from "./Navbar.module.scss";
import logo from "../../assets/golden_shoe_logo_3.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faPhone,
  faShoePrints,
  faBookOpen,
  faBars,
  faArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", clickOutsideHandler);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, [showDropdown]);

  return (
    <nav ref={dropdownRef} className={style.navbar}>
      <div className={style.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src={logo}
              width="140px"
              height="50px"
              alt="Golden Shoe Logo"
            />
          </a>
        </Link>
      </div>

      <div className={style.men}>
        <p>Men</p>
      </div>
      <div className={style.women}>
        <p>Women</p>
      </div>
      <div className={style.kids}>
        <p>Kids</p>
      </div>
      <div className={style.search}>
        <form>
          <input type="text" />
          <button>
            <FontAwesomeIcon width="1rem" icon={faSearch} />
          </button>
        </form>
      </div>

      <div className={style.dropdown_button} onClick={dropdownHandler}>
        {!showDropdown && (
          <FontAwesomeIcon className={style.icon} icon={faBars} />
        )}
        {showDropdown && (
          <FontAwesomeIcon className={style.icon} icon={faArrowDown} />
        )}
      </div>

      {showDropdown && (
        <div className={style.dropdown}>
          <Link href="/" passHref>
            <div className={style.option}>
              <p>Home</p>
              <FontAwesomeIcon className={style.icon} icon={faHome} />
            </div>
          </Link>
          <Link href="/products" passHref>
            <div className={style.option}>
              <p>Products</p>
              <FontAwesomeIcon className={style.icon} icon={faShoePrints} />
            </div>
          </Link>
          <div className={style.option}>
            <p>My Account</p>
            <FontAwesomeIcon className={style.icon} icon={faUser} />
          </div>
          <div className={style.option}>
            <p>About</p>
            <FontAwesomeIcon className={style.icon} icon={faBookOpen} />
          </div>
          <Link href="/contact" passHref>
            <div className={style.option}>
              <p>Contact</p>
              <FontAwesomeIcon className={style.icon} icon={faPhone} />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
