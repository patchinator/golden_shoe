import style from "./ContactCards.module.scss";
import ContactCard from "./ContactCard";

const ContactCards = () => {
  return (
    <div>
      <div className={style.cards_header}>FAQ Topics</div>
      <div className={style.cards_container}>
        <ContactCard
          header="Delivery"
          link_one="Where's my order?"
          link_two="Delivery Options"
          link_three="Membership Delivery"
        />
        <ContactCard
          header="Returns/ Refunds"
          link_one="How do I return?"
          link_two="Can I exchange?"
          link_three="Have you received it?"
        />
        <ContactCard
          header="Products/ Stock"
          link_one="Sizing guide"
          link_two="Will an item be back in stock?"
          link_three="Find a brand"
        />
        <ContactCard
          header="Technical Issues"
          link_one="Sign in troubles"
          link_two="Website issues"
          link_three="Browser support"
        />
        <ContactCard
          header="Order Issues"
          link_one="Missing item"
          link_two="Wrong item received"
          link_three="Shoe Damages"
        />
        <ContactCard
          header="Payments/ Vouchers"
          link_one="Payment types"
          link_two="Promo codes"
          link_three="When will I be charged?"
        />
      </div>
    </div>
  );
};

export default ContactCards;
