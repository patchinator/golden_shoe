import style from "./MenuButton.module.scss";

const MenuButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default MenuButton;
