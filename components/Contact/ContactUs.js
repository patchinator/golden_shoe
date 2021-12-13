import { useState } from "react";

import style from "./ContactUs.module.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [chatModal, setChatModal] = useState(false);

  const openChatModalHandler = () => {
    setChatModal(true);
  };

  const closeChatModalHandler = () => {
    setChatModal(false);
  };

  return (
    <div>
      {chatModal && (
        <div className={style.chat_modal}>
          <div className={style.modal_options}>
            <div className={style.modal_online_icon}></div>
            <div onClick={closeChatModalHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className={style.modal_text_screen}>
            <div className={style.modal_text}>
              Hey @User, how can i help today?
            </div>
          </div>
          <form className={style.modal_text_form}>
            <input type="text" />
            <button>Chat</button>
          </form>
        </div>
      )}
      <div className={style.header}>Get In Touch</div>
      <div className={style.contact_card}>
        <div className={style.contact_links}>
          <div className={style.contact_link} onClick={openChatModalHandler}>
            online chat
          </div>
          <div className={style.contact_link}>email us</div>
          <div className={style.contact_link}>contact numbers</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
