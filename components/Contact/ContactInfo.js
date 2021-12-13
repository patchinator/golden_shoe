import style from "./ContactInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div className={style.contact_main}>
      <div className={style.contact_search}>
        <div className={style.contact_title}>Customer Care</div>
        <form className={style.contact_form}>
          <input type="text" placeholder="FAQ" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
