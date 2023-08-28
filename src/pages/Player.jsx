import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import PlayerLanding from "../components/PlayerLanding/PlayerLanding";

function Player({ modal, toggleModal, user }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <SideBar modal={modal} toggleModal={toggleModal} user={user} />
      <Search />
      <PlayerLanding />
    </div>
  );
}

export default Player;
