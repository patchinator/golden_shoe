import style from "./Background.module.scss";

const Background = (props) => {
  return <div className={style.background}>{props.children}</div>;
};

export default Background;
