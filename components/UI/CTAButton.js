const CTAButton = (props) => {
  return (
    <button onClick={props.onClick} className={style.button}>
      {props.children}
    </button>
  );
};
