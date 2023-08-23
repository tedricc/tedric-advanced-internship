import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  BsHouseDoor,
  BsBookmark,
  BsPen,
  BsSearch,
  BsGear,
} from "react-icons/bs";
import { BiHelpCircle, BiLogOut } from "react-icons/bi";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <figure className="sidebar__logo--wrapper">
        <img src={Logo} alt="" className="sidebar__logo" />
      </figure>
      <div className="sidebar__wrapper">
        <div className="sidebar__top">
          <Link to="/for-you" className="sidebar__link">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BsHouseDoor className="sidebar__icon" />
            </div>
            For You
          </Link>
          <Link to="/library" className="sidebar__link">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BsBookmark className="sidebar__icon" />
            </div>
            My Library
          </Link>
          <div className="sidebar__link sidebar__link--false">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BsPen className="sidebar__icon" />
            </div>
            Highlights
          </div>
          <div className="sidebar__link sidebar__link--false">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BsSearch className="sidebar__icon" />
            </div>
            Search
          </div>
        </div>
        <div className="sidebar__bottom">
          <Link to="/settings" className="sidebar__link">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BsGear className="sidebar__icon" />
            </div>
            Settings
          </Link>
          <div className="sidebar__link sidebar__link--false">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BiHelpCircle className="sidebar__icon" />
            </div>
            Help & Support
          </div>
          <div className="sidebar__link">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper">
              <BiLogOut className="sidebar__icon" />
            </div>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
