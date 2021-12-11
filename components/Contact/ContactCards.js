import style from "./ContactCards.module.scss";
import ContactCard from "./ContactCard";

const ContactCards = () => {
  return (
    <div className={style.cards_container}>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default ContactCards;
