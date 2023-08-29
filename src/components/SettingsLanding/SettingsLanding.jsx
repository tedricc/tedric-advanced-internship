import React from "react";
import LoginImg from "../../assets/login.png";
import "./SettingsLanding.css";

function SettingsLanding({ modal, toggleModal, user }) {
  return (
    <div className="container">
      <div className="row">
        <div className="section__title page__title">Settings</div>

        {user ? (
          <>
            <div className="settings__content">
              <div class="settings__subtitle">Your Subscription plan</div>
              <div class="settings__text">Test</div>
            </div>
            <div class="settings__content">
              <div class="settings__subtitle">Email</div>
              <div class="settings__text">Test</div>
            </div>
          </>
        ) : (
          <div className="settings__login--wrapper">
            <img src={LoginImg} alt="" className="settings__login--img" />
            <div className="settings__login--text">
              Log in to your account to see your details.
            </div>
            <button className="btn settings__login--btn" onClick={toggleModal}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsLanding;
