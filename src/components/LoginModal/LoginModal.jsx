import React from "react";
import "./LoginModal.css";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";

function LoginModal({ toggleModal }) {
  return (
    <div className="auth__wrapper">
      <div className="auth">
        <div className="auth__content">
          <div className="auth__title">Log in to Summarist</div>
          <button className="btn guest__btn--wrapper">
            <figure className="guest__icon--mask">
              <BsPersonFill />
            </figure>
            Login as a Guest
          </button>
          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>
          <button className="btn google__btn--wrapper">
            <figure className="google__icon--mask">
              <FcGoogle />
            </figure>
            Login with Google
          </button>
          <div className="auth__separator">
            <span className="auth__separator--text">or</span>
          </div>
          <form className="auth__main--form">
            <input
              type="email"
              placeholder="Email Address"
              className="auth__main--input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="auth__main--input"
              required
            />
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
        <div className="auth__forgot--password">Forgot your password?</div>
        <button className="auth__switch--btn">Don't have an account?</button>
        <div className="auth__close--btn" onClick={toggleModal}>
          <FaTimes />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
