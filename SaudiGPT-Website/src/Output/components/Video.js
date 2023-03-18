import React from "react";
import { useTranslation } from "react-i18next";

const Video = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="about section section--no-pad-bot" id="Video">
        <div className="container">
          <div class="block-header block-header--animated block-header--center">
            <h2 class="title title--medium title--black">Video</h2>
          </div>{" "}
          <div
            className="video aos-init aos-animate"
            data-aos="fade-up"
            style={{ backgroundImage: "url(./assets/img/video-bg.png)" }}
          >
            <a
              href="http://www.youtube.com/watch?v=0O2aH4XLbto"
              className="popup-youtube video__btn"
            >
              <img src="./assets/img/play.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Video;
