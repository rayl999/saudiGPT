import React from "react";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="advisors section" id="Team">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div
                data-aos="fade-up"
                className="block-header block-header--animated block-header--center"
              >
                <h2 className="title title--medium title--black">Team members</h2>
              </div>
            </div>
          </div>
          <div className="row w-75 centeer">
            <div className="col-lg-3">
              <a href="#" className="advisor ">
                <div className="advisor__avatar" data-aos="fade-up">
                  <img
                    src="./assets/img/advisorBg-1.svg"
                    alt=""
                    className="advisor__bg"
                  />
                  <img
                    src="./assets/img/rayan.png"
                    alt=""
                    className="advisor__img"
                  />
                </div>
                <div className="advisor__name">Rayan lubbad</div>
                <div className="advisor__post">Full stack developer</div>
              </a>
            </div>
            <div className="col-lg-3">
              <a
                href="#"
                className="advisor "
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="advisor__avatar">
                  <img
                    src="./assets/img/advisorBg-2.svg"
                    alt=""
                    className="advisor__bg"
                  />
                  <img
                    src="./assets/img/karem.jpeg"
                    alt=""
                    className="advisor__img"
                  />
                </div>
                <div className="advisor__name">Abdulkarim Almalki</div>
                <div className="advisor__post">Frontend developer</div>
              </a>
            </div>
            <div className="col-lg-3">
              <a
                href="#"
                className="advisor "
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="advisor__avatar">
                  <img
                    src="./assets/img/advisorBg-3.svg"
                    alt=""
                    className="advisor__bg"
                  />
                  <img
                    src="./assets/img/zain.jpg"
                    alt=""
                    className="advisor__img"
                  />
                </div>
                <div className="advisor__name">Zain Alsamal</div>
                <div className="advisor__post">Creative thinker</div>
              </a>
            </div>
            <div className="col-lg-3">
              <a href="#" className="advisor ">
                <div className="advisor__avatar" data-aos="fade-up">
                  <img
                    src="./assets/img/advisorBg-1.svg"
                    alt=""
                    className="advisor__bg"
                  />
                  <img
                    src="./assets/img/shahad.jpg"
                    alt=""
                    className="advisor__img"
                  />
                </div>
                <div className="advisor__name">Shahad Alshehri </div>
                <div className="advisor__post">Business developer</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Team;
