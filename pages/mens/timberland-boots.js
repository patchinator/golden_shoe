import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/Products/ItemCard";
import Modal from "../../components/UI/Modals/Modal";
import { useState } from "react";

const TimberlandBoots = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      {showModal && <Modal hideModal={hideModalHandler} />}
      <ItemCard showModal={showModalHandler} />
      <Footer />
    </div>
  );
};

export default TimberlandBoots;
