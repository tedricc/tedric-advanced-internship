import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import PlayerLanding from "../components/PlayerLanding/PlayerLanding";

function Player({ modal, toggleModal, user }) {
  return (
    <div className="wrapper">
      <SideBar modal={modal} toggleModal={toggleModal} user={user} />
      <Search />
      <PlayerLanding />
    </div>
  );
}

export default Player;
