import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState("en");

  useEffect(() => {
    const ele = document.getElementById("header");
    const interval = setInterval(() => {
      ele.classList.add("sticky");
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
      <header className="header sticky" id="header">
        <a href="/" className="logo">
          <div className="logo__title">IDA</div>
        </a>
        <ul className="menu">
          <li className="menu__item">
            <a href="#about" className="menu__link">
              About
            </a>
          </li>
          <li className="menu__item">
            <a href="#Video" className="menu__link">
              Video
            </a>
          </li>
          <li className="menu__item">
            <a href="#Demo" className="menu__link">
              Demo
            </a>
          </li>
          <li className="menu__item">
            <a href="#Documents" className="menu__link">
              Documents
            </a>
          </li>
          <li className="menu__item">
            <a href="#Team" className="menu__link">
              Team
            </a>
          </li>
        </ul>
        <div className="header__right"></div>
        <div className="btn-menu">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
      </header>
      <div className="fixed-menu">
        <div className="fixed-menu__header">
          <a href="#" className="logo logo--color">
            <div className="logo__img" />
            <div className="logo__title">Cryptoland</div>
          </a>
          <div className="btn-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 47.971 47.971"
              style={{ enableBackground: "new 0 0 47.971 47.971" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
                fill="#006DF0"
              />
            </svg>
          </div>
        </div>
        <div className="fixed-menu__content">
          <ul className="mob-menu">
            <li className="mob-menu__item">
              <a href="#about" className="mob-menu__link">
                About
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Video" className="mob-menu__link">
                Video
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Demo" className="mob-menu__link">
                Demo
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Documents" className="mob-menu__link">
                Documents
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Team" className="mob-menu__link">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <header id="header" className="header">
        <a href="#" className="logo">
          <div className="logo__title">Rayan Lubbad</div>
        </a>
        <ul className="menu" id="menu">
          <li className="menu__item">
            <a href="#about" className="menu__link">
              {t("About")}
            </a>
          </li>
          <li className="menu__item">
            <a href="#services" className="menu__link">
              {" "}
              {t("Services")}
            </a>
          </li>
          <li className="menu__item">
            <a href="#Products" className="menu__link">
              {" "}
              {t("Products")}
            </a>
          </li>
          <li className="menu__item">
            <a href="#Frameworks" className="menu__link">
              {" "}
              {t("Frameworks")}
            </a>
          </li>
          <li className="menu__item">
            <a href="#Contact" className="menu__link">
              {" "}
              {t("Contact me")}
            </a>
          </li>
        </ul>
        <div className="header__right">
          <div className="lng" onClick={changeLanguage}>
            {lng === "en" ? "English" : "العربية"}
          </div>
        </div>
        <div class="btn-menu">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
      </header>
      <div className="fixed-menu">
        <div className="fixed-menu__header">
          <a href="#" className="logo">
            <div className="logo__title">Rayan Lubbad</div>
          </a>
          <div className="btn-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 47.971 47.971"
              style={{ enableBackground: "new 0 0 47.971 47.971" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
                fill="#006DF0"
              />
            </svg>
          </div>
        </div>
        <div className="fixed-menu__content">
          <ul className="mob-menu mobile-menu">
            <li className="mob-menu__item">
              <a href="#about" className="mob-menu__link">
                {t("About")}
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#services" className="mob-menu__link">
                {t("Services")}
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Products" className="mob-menu__link">
                {t("Products")}
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Frameworks" className="mob-menu__link">
                {t("Frameworks")}
              </a>
            </li>
            <li className="mob-menu__item">
              <a href="#Contact" className="mob-menu__link">
                {t("Contact me")}
              </a>
            </li>
          </ul>
          <div className="mobile-menu">
            <div className="lng" onClick={changeLanguage}>
              {lng === "en" ? "English" : "العربية"}
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};
export default Header;
