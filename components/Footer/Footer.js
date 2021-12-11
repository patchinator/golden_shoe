import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.social_media}>socials</div>
      <div className={style.column_wrapper}>
        <div className={style.columns}>column 1</div>
        <div className={style.columns}>column 2</div>
        <div className={style.columns}>column 3</div>
        <div className={style.columns}>column 4</div>
      </div>
    </footer>
  );
};

export default Footer;
