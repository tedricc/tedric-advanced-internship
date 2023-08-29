import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import SettingsLanding from "../components/SettingsLanding/SettingsLanding";
import LoginModal from "../components/LoginModal/LoginModal";

function Settings({ modal, toggleModal, user }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {modal && <LoginModal toggleModal={toggleModal} />}

      <div className="wrapper">
        <SideBar modal={modal} toggleModal={toggleModal} user={user} />
        <Search />
        <SettingsLanding modal={modal} toggleModal={toggleModal} user={user} />
      </div>
    </>
  );
}

export default Settings;
