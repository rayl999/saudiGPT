import React from "react";

import { useTranslation } from "react-i18next";
import presentation from "./docs/aoun.pptx"
// import tempRepo from "./docs/tempRepo.rar"

const Docs = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section id="Documents" className="docs">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                data-aos="fade-left"
                className="block-header block-header--animated aos-init aos-animate"
              >
                <h2 className="title title--medium title--black">Documents</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a
                href={presentation}
                download
                className="doc aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="doc__name">Presentation </div>
              </a>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <a
                href={tempRepo}
                download
                className="doc aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <div className="doc__name">Source code</div>
              </a>
            </div> */}
            <div className="col-lg-3 col-md-6">
              <a
                href="https://github.com/rayl999/Alibaba-cloud-Leap-2023"
                target="_blank"
                className="doc aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="doc__name">Github repo.</div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                href
                download
                className="doc aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="doc__name">References </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Docs;
