import ContactCard from "../components/Contact/ContactCard";
import ContactInfo from "../components/Contact/ContactInfo";
import Navbar from "../components/Navbar";
import style from "./contact.module.scss";

const ContactPage = () => {
  return (
    <section>
      <Navbar />
      <section className={style.container}>
        <ContactInfo />
        <ContactCard />
      </section>
    </section>
  );
};

export default ContactPage;
