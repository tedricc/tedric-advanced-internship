import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/login.png";
import "./SettingsLanding.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getPortalUrl } from "../../stripe/stripe";
import app from "../../firebase/firebase";
import SkeletonSpin from "../ui/SkeletonSpin/SkeletonSpin";

function SettingsLanding({ toggleModal, user, isPremium }) {
  const firebase = app;
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function manageSubscription() {
    window.scrollTo(0, 0);
    setLoading(true);
    const portalUrl = await getPortalUrl(firebase);
    setLoading(false);
    window.location.href = `${portalUrl}`;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email } = user;
        setEmail(email);
        // ...
      } else {
        // User is signed out
        console.log("User Logged Out");
        // ...
      }
    });
  }, [auth]);

  return (
    <div className="container">
      <div className="row">
        <div className="section__title page__title">Settings</div>

        {user ? (
          <>
            {loading ? (
              <SkeletonSpin />
            ) : (
              <>
                <div className="settings__content">
                  <div className="settings__subtitle">
                    Your Subscription plan
                  </div>
                  <div className="settings__text">
                    {isPremium ? "Premium" : "Basic"}
                  </div>
                </div>
                <div className="settings__content">
                  <div className="settings__subtitle">Email</div>
                  <div className="settings__text">
                    {email ? email : "Guest"}
                  </div>
                </div>
                <div className="settings__content">
                  <button
                    className="settings__manage btn"
                    onClick={manageSubscription}
                  >
                    Manage Subscription
                  </button>
                </div>
              </>
            )}
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
