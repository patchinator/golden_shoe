import style from "./ContactCard.module.scss";

const ContactCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_header}>top</div>
      <div className={style.card_links}>
        <div>helpoo</div>
        <div>helo</div>
        <div>heloop</div>
        <div>helplay</div>
      </div>
    </div>
  );
};

export default ContactCard;
