import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import ForYouLanding from "../components/ForYouLanding/ForYouLanding";
import LoginModal from "../components/LoginModal/LoginModal";

function ForYou({ modal, toggleModal, user }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {modal && <LoginModal toggleModal={toggleModal} />}

      <div className="wrapper">
        <SideBar modal={modal} toggleModal={toggleModal} user={user} />
        <Search />
        <ForYouLanding />
      </div>
    </>
  );
}

export default ForYou;
