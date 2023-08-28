import React, { useState } from "react";
import "./Plans.css";
import Pricing from "../../assets/pricing-top.png";
import { AiFillFileText } from "react-icons/ai";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";

function Plans() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="plan">
      <div className="plan__header--wrapper">
        <div className="plan__header">
          <div className="plan__title">
            Get unlimited access to many amazing books to read
          </div>
          <div className="plan__subtitle">
            Turn ordinary moments into amazing learning opportunities
          </div>
          <figure className="plan__img--wrapper">
            <img src={Pricing} alt="" className="plan__img" />
          </figure>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <div className="plan__features--wrapper">
            <div className="plan__feature">
              <figure className="plan__feature--icon">
                <AiFillFileText />
              </figure>
              <div className="plan__feature--text">
                <b>Key ideas in few min</b> with many books to read
              </div>
            </div>

            <div className="plan__feature">
              <figure className="plan__feature--icon">
                <PiPottedPlantFill />
              </figure>
              <div className="plan__feature--text">
                <b>3 million</b> people growing with Summarist everyday
              </div>
            </div>

            <div className="plan__feature">
              <figure className="plan__feature--icon">
                <FaHandshake />
              </figure>
              <div className="plan__feature--text">
                <b>Precise recommendations</b> curated by experts
              </div>
            </div>
          </div>

          <div className="section__title">Choose the plan that fits you</div>

          <div
            className={`plan__card ${yearly && "plan__card--active"}`}
            onClick={() => setYearly(true)}
          >
            <div className="plan__card--circle">
              {yearly && <div className="plan__card--dot"></div>}
            </div>

            <div className="plan__card--container">
              <div className="plan__card--title">Premium Plus Yearly</div>
              <div className="plan__card--price">$99.99/year</div>
              <div className="plan__card--text">7-day free trial included</div>
            </div>
          </div>

          <div className="plan__card--sep">
            <div className="plan__sep">or</div>
          </div>

          <div
            className={`plan__card ${!yearly && "plan__card--active"}`}
            onClick={() => setYearly(false)}
          >
            <div className="plan__card--circle">
              {!yearly && <div className="plan__card--dot"></div>}
            </div>

            <div className="plan__card--container">
              <div className="plan__card--title">Premium Monthly</div>
              <div className="plan__card--price">$9.99/month</div>
              <div className="plan__card--text">No trial included</div>
            </div>
          </div>

          <div className="faq__wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
