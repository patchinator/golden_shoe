import ContactCards from "../components/Contact/ContactCards";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactUs from "../components/Contact/ContactUs";
import Navbar from "../components/Header/Navbar";
import style from "./contact.module.scss";
import Footer from "./../components/Footer/Footer";

const ContactPage = () => {
  return (
    <section>
      <Navbar />
      <div className={style.container}>
        <ContactInfo />
        <ContactCards />
        <ContactUs />
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
