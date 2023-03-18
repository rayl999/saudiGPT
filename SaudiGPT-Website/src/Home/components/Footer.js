import React from "react";

import { useTranslation } from "react-i18next";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="subscribe subscribe2 section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="block-header block-header--animated block-header--center m-0">
              <div class="subtitle m-0">Made for Ali baba hackathon | Leap 2023</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
};
export default Footer;
