import style from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.social_media}>
        <div className={style.social_media_text}>
          Follow our socials for weekly sales and releases:
        </div>
        <div className={style.media_icon_facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className={style.media_icon_twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className={style.media_icon_instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <div className={style.column_wrapper}>
        <div className={style.columns}>
          <div className={style.column_header}>Help & Info</div>
          <div className={style.link}>Help</div>
          <div className={style.link}>Track Order</div>
          <div className={style.link}>Deliver & Returns</div>
          <div className={style.link}>Student Discount</div>
        </div>
        <div className={style.columns}>
          <div className={style.column_header}>About Golden Shoe</div>
          <div className={style.link}>About us</div>
          <div className={style.link}>Careers @ Golden Shoe</div>
          <div className={style.link}>Cyber Security</div>
        </div>
        <div className={style.columns}>
          <div className={style.column_header}>More Info</div>
          <div className={style.link}>Black Friday</div>
          <div className={style.link}>Weekly Deals</div>
          <div className={style.link}>Gift Vouchers</div>
        </div>
        <div className={style.columns}>
          <div className={style.column_header}>T&C</div>
          <div className={style.link}>Privacy and Cookies</div>
          <div className={style.link}>Terms and Conditions</div>
          <div className={style.link}>Accessibility</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
