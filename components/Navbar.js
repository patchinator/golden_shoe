import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.title}>Golden Shoe</div>
      <div className={style.options}>
        <div className={style.option}>Home</div>
        <div className={style.option}>products</div>
        <div className={style.option}>My Account</div>
        <div className={style.option}>About</div>
        <div className={style.option}>Contact</div>
        <div className={style.cart}>
          <div>Your cart</div>
          <div>Shoes: 4 Price: £193.10</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
