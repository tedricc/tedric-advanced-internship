import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";
import ForYouLanding from "../components/ForYouLanding/ForYouLanding";

function ForYou() {
  return (
    <div className="wrapper">
      <SideBar />
      <Search />
      <ForYouLanding />
    </div>
  );
}

export default ForYou;
