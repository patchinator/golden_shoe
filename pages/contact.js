import ContactCards from "../components/Contact/ContactCards";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactUs from "../components/Contact/ContactUs";
import Navbar from "../components/Navbar";
import style from "./contact.module.scss";

const ContactPage = () => {
  return (
    <section>
      <Navbar />
      <section className={style.container}>
        <ContactInfo />
        <ContactCards />
        <ContactUs />
      </section>
    </section>
  );
};

export default ContactPage;
