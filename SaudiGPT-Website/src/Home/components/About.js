import React from "react";

import { useTranslation } from "react-i18next";
import presentation from "./docs/aoun.pptx";

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
                    AOUN
                  </h3>
                  <p>
                    The widget is a meeting assistant that records and
                    transcribes meetings, separates speakers using diarization,
                    and uses ChatGPT to analyze the text and provide a summary
                    of the meeting. It can be integrated with various apps and
                    aims to make meeting management easier and more efficient
                    for users.
                  </p>
                  <a href={presentation} download>
                    <button className="form__btn join-us__btn w-50">
                      Download Presentation
                    </button>
                  </a>
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
