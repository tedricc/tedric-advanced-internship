import React, { useState } from "react";
import "./Plans.css";
import Pricing from "../../assets/pricing-top.png";
import { AiFillFileText } from "react-icons/ai";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

function Plans() {
  const [yearly, setYearly] = useState(true);
  const [faqOpen, setFaqOpen] = useState(false);

  function toggleFaq() {
    setFaqOpen(!faqOpen);
  }

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

          <div className="plan__cta">
            <div className="btn__wrapper">
              <button className="btn" style={{ width: "300px" }}>
                {yearly ? (
                  <span>Start your free 7-day trial</span>
                ) : (
                  <span>Start your first month</span>
                )}
              </button>
            </div>

            <div className="plan__disclaimer">
              {yearly ? (
                <span>
                  Cancel your trial at any time before it ends, and you won't be
                  charged.
                </span>
              ) : (
                <span>30-day money back guarantee, no questions asked.</span>
              )}
            </div>
          </div>

          <div className="faq__wrapper">
            <div className="faq__card">
              <div className="faq__header" onClick={toggleFaq}>
                <div className="faq__title">
                  How does the free 7-day trial work?
                </div>
                <MdKeyboardArrowUp
                  style={{
                    transform: faqOpen ? "rotate(0deg)" : "rotate(-180deg)",
                  }}
                />
              </div>

              <div className="collapse">
                <div className="faq__text">
                  Begin your complimentary 7-day trial with a Summarist annual
                  membership. You are under no obligation to continue your
                  subscription, and you will only be billed when the trial
                  period expires. With Premium access, you can learn at your own
                  pace and as frequently as you desire, and you may terminate
                  your subscription prior to the conclusion of the 7-day free
                  trial.
                </div>
              </div>
            </div>

            <div className="faq__card">
              <div className="faq__header" onClick={toggleFaq}>
                <div className="faq__title">
                  Can I switch subscriptions from monthly to yearly, or yearly
                  to monthly?
                </div>
                <MdKeyboardArrowUp
                  style={{
                    transform: faqOpen ? "rotate(0deg)" : "rotate(-180deg)",
                  }}
                />
              </div>

              <div className="collapse">
                <div className="faq__text">
                  While an annual plan is active, it is not feasible to switch
                  to a monthly plan. However, once the current month ends,
                  transitioning from a monthly plan to an annual plan is an
                  option.
                </div>
              </div>
            </div>

            <div className="faq__card">
              <div className="faq__header" onClick={toggleFaq}>
                <div className="faq__title">
                  What's included in the Premium plan?
                </div>
                <MdKeyboardArrowUp
                  style={{
                    transform: faqOpen ? "rotate(0deg)" : "rotate(-180deg)",
                  }}
                />
              </div>

              <div className="collapse">
                <div className="faq__text">
                  Premium membership provides you with the ultimate Summarist
                  experience, including unrestricted entry to many best-selling
                  books high-quality audio, the ability to download titles for
                  offline reading, and the option to send your reads to your
                  Kindle.
                </div>
              </div>
            </div>
            <div className="faq__card">
              <div className="faq__header" onClick={toggleFaq}>
                <div className="faq__title">
                  Can I cancel during my trial or subscription?
                </div>
                <MdKeyboardArrowUp
                  style={{
                    transform: faqOpen ? "rotate(0deg)" : "rotate(-180deg)",
                  }}
                />
              </div>

              <div className="collapse">
                <div className="faq__text">
                  You will not be charged if you cancel your trial before its
                  conclusion. While you will not have complete access to the
                  entire Summarist library, you can still expand your knowledge
                  with one curated book per day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
