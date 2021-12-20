import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// local imports
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
  faShoppingBag,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showNavbar, setShowNavbar] = useState(true);
  const dropdownRef = useRef(null);

  const dropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  // let scrollPos = 0;
  // const navbarControl = () => {
  //   if (window.scrollY > 100) {
  //     setShowNavbar(false);
  //   } else {
  //     setShowNavbar(true);
  //   }
  // };

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
    // window.addEventListener("scroll", navbarControl);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
      // window.removeEventListener("scroll", navbarControl);
    };
  }, [showDropdown]);

  return (
    <nav ref={dropdownRef} className={style.navbar}>
      <div className={style.navbar_top}>
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
          <Link href="/mens/timberland-boots" passHref>
            <a>Men</a>
          </Link>
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

        <div className={style.desktop_icons}>
          <div>
            <FontAwesomeIcon className={style.icon} icon={faHome} />
          </div>
          <div>
            <FontAwesomeIcon className={style.icon_user} icon={faUser} />
          </div>
          <div>
            <FontAwesomeIcon className={style.icon_heart} icon={faHeart} />
          </div>
          <div>
            <FontAwesomeIcon className={style.icon_bag} icon={faShoppingBag} />
          </div>
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
            <Link href="/mens/timberland-boots" passHref>
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
      </div>

      <div className={style.navbar_bottom}>
        <div>help</div>
        <div>
          <Link href="/contact">contact</Link>
        </div>
        <div>exchanges & returns</div>
        <div>order tracker</div>
        <div>gift cards</div>
        <div>student discount</div>
        <div>log in / sign up</div>
      </div>
    </nav>
  );
};

export default Navbar;
