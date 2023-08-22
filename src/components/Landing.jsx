import React from "react";
import LandingImage from "../assets/landing.png";

function Landing({ toggleModal }) {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__content">
              <div className="landing__content__title">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="landing__content__subtitle">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don't like to read.
              </div>
              <button onClick={toggleModal} className="btn home__cta--btn">
                Login
              </button>
            </div>
            <figure className="landing__image--mask">
              <img src={LandingImage} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
