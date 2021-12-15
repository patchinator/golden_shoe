import style from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <div onClick={props.hideModal} className={style.modal_backdrop}>
      <div className={style.modal}></div>
    </div>
  );
};

export default Modal;
