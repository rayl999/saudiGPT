import React from "react";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>
        <img
          src="./assets/img/big-triangle-bg-right.png"
          className="wrapper__bg"
          alt=""
        />
        <section className="promo" id="about">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col">
                <div className="promo__content" data-aos="fade-up">
                  <h3 className="title title--big title--white promo__title">
                    Intelligent diagnoses system
                  </h3>
                  <p>
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                    blah blah blah blah blah blah blah blah blah blah blah blah
                  </p>

                  <button className="form__btn join-us__btn w-50">
                    Download Presentation
                  </button>
                </div>
                <img
                  src="./assets/img/city.png"
                  data-aos="fade-left"
                  alt=""
                  className="promo__img"
                />
              </div>
            </div>
          </div>
          <img src="./assets/img/aboutBg.png" className="promo__bg" alt="" />
        </section>
      </div>
    </React.Fragment>
  );
};
export default About;
