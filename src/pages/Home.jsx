import React, { useState } from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Numbers from "../components/Numbers";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal/LoginModal.jsx";

function Home() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  return (
    <>
      {modal && <LoginModal toggleModal={toggleModal} />}
      <Nav toggleModal={toggleModal} />
      <Landing toggleModal={toggleModal} />
      <Features />
      <Reviews toggleModal={toggleModal} />
      <Numbers />
      <Footer />
    </>
  );
}

export default Home;
