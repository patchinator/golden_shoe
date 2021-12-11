import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.social_media}>socials</div>
      <div className={style.column_wrapper}>
        <div className={style.columns}>
          <div>Help & Info</div>
          <div>Help</div>
          <div>Track Order</div>
          <div>Deliver & Returns</div>
          <div>Student Discount</div>
        </div>
        <div className={style.columns}>
          <div>About Golden Shoe</div>
          <div>About us</div>
          <div>Careers at Golden Shoe</div>
          <div>Cyber Security</div>
        </div>
        <div className={style.columns}>
          <div>More Info</div>
          <div>Black Friday</div>
          <div>Weekly Deals</div>
          <div>Weekly Deals</div>
          <div>Gift Vouchers</div>
        </div>
        <div className={style.columns}>
          <div>T&C</div>
          <div>Privacy and Cookies</div>
          <div>Terms and Conditions</div>
          <div>Accessibility</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
