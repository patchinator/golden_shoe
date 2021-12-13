import style from "./ContactCard.module.scss";

const ContactCard = (props) => {
  return (
    <div className={style.card}>
      <div className={style.card_header}>{props.header}</div>
      <div className={style.card_links}>
        <div>{props.link_one}</div>
        <div>{props.link_two}</div>
        <div>{props.link_three}</div>
        <div className={style.expand}>View All</div>
      </div>
    </div>
  );
};

export default ContactCard;
