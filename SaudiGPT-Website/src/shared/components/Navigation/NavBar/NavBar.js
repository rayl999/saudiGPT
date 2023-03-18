import React, { Suspense, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
const NavBar = (props) => {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useState("en");

  const changeLanguage = (lng) => {
    setLng(lng);

    i18n.changeLanguage(lng);
    if (lng == "en") {
      document.documentElement.dir = "ltr";
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      localStorage.setItem(
        "userPref",
        JSON.stringify({
          lng: "en",
          expiration: tokenExpirationDate.toISOString(),
        })
      );

    }
    if (lng == "ar") {
      document.documentElement.dir = "rtl";
      const tokenExpirationDate = new Date(
        new Date().getTime() + 1000 * 60 * 60
      );
      localStorage.setItem(
        "userPref",
        JSON.stringify({
          lng: "ar",
          expiration: tokenExpirationDate.toISOString(),
        })
      );
    }
  };

  const mode = (mode) => {
    const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      "userMode",
      JSON.stringify({
        mode: mode,
        expiration: tokenExpirationDate.toISOString(),
      })
    );

    if (mode == "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      document.getElementById("dark").classList.add("active");
      document.getElementById("light").classList.remove("active");
    }
    if (mode == "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      document.getElementById("light").classList.add("active");
      document.getElementById("dark").classList.remove("active");
    }
  };

  useEffect(() => {
    const userPref = JSON.parse(localStorage.getItem("userPref"));
    if (userPref != null && userPref.lng === "ar") setLng("ar");


  });
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname != "/auth" ? (
        <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
          <div className="container-fluid navbar-inner">
            <a href="../dashboard/index.html" className="navbar-brand">
              <svg
                width="30"
                className="text-primary"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.757324"
                  y="19.2427"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 -0.757324 19.2427)"
                  fill="currentColor"
                />
                <rect
                  x="7.72803"
                  y="27.728"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(-45 7.72803 27.728)"
                  fill="currentColor"
                />
                <rect
                  x="10.5366"
                  y="16.3945"
                  width="16"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5366 16.3945)"
                  fill="currentColor"
                />
                <rect
                  x="10.5562"
                  y="-0.556152"
                  width="28"
                  height="4"
                  rx="2"
                  transform="rotate(45 10.5562 -0.556152)"
                  fill="currentColor"
                />
              </svg>
              <h4 className="logo-title">Wotn</h4>
            </a>
            <div
              className="sidebar-toggle"
              data-toggle="sidebar"
              data-active="true"
            >
              <i className="icon">
                <svg width="20px" height="20px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  />
                </svg>
              </i>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <span className="mt-2 navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                <li className="nav-item dropdown">
                  <div className="d-grid gap-x-2 grid-cols-2 ">
                    <div
                      id="dark"
                      onClick={() => mode("dark")}
                      className="btn-border"
                      data-setting="color-mode"
                      data-name="color"
                      data-value="dark"
                    >
                      <svg
                        width="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"
                        />
                      </svg>
                    </div>
                    <div
                      id="light"
                      onClick={() => mode("light")}
                      className="btn-border active"
                      data-setting="color-mode"
                      data-name="color"
                      data-value="light"
                    >
                      <svg
                        width="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="search-toggle nav-link"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        lng == "en"
                          ? "./assets/images/Flag/flag001.png"
                          : "./assets/images/Flag/flag002.png"
                      }
                      className="img-fluid rounded-circle main-flag"
                      alt="user"
                    />
                    <span className="bg-primary"></span>
                  </a>
                  <div
                    className="p-0 sub-drop dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <div className="m-0 border-0 shadow-none card">
                      <div className="p-0 ">
                        <ul className="p-0 list-group list-group-flush">
                          <li
                            onClick={() => changeLanguage("en")}
                            className="iq-sub-card list-group-item"
                          >
                            <a className="p-0" href="#">
                              <img
                                src="./assets/images/Flag/us.png"
                                alt="img-flaf"
                                className="img-fluid me-2"
                              />
                              {t("English")}
                            </a>
                          </li>
                          <li
                            onClick={() => changeLanguage("ar")}
                            className="iq-sub-card list-group-item"
                          >
                            <a className="p-0" href="#">
                              <img
                                src="./assets/images/Flag/sa.png"
                                alt="img-flaf"
                                className="img-fluid me-2"
                              />
                              {t("Arabic")}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    id="notification-drop"
                    data-bs-toggle="dropdown"
                  >
                    <svg
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="bg-danger dots"></span>
                  </a>
                  <div
                    className="p-0 sub-drop dropdown-menu dropdown-menu-end"
                    aria-labelledby="notification-drop"
                  >
                    <div className="m-0 shadow-none card">
                      <div className="py-3 card-header d-flex justify-content-between bg-primary">
                        <div className="header-title">
                          <h5 className="mb-0 text-white">
                            {t("AllNotifications")}
                          </h5>
                        </div>
                      </div>
                      <div className="p-0 card-body">
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <img
                              className="p-1 avatar-40 rounded-pill bg-soft-primary"
                              src="./assets/images/shapes/01.jpg"
                              alt=""
                            />
                            <div className="ms-3 w-100">
                              <h6 className="mb-0 ">Emma Watson Bni</h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">95 MB</p>
                                <small className="float-end font-size-12">
                                  Just Now
                                </small>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <img
                                className="p-1 avatar-40 rounded-pill bg-soft-primary"
                                src="./assets/images/shapes/02.png"
                                alt=""
                              />
                            </div>
                            <div className="ms-3 w-100">
                              <h6 className="mb-0 ">New customer is join</h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">Cyst Bni</p>
                                <small className="float-end font-size-12">
                                  5 days ago
                                </small>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <img
                              className="p-1 avatar-40 rounded-pill bg-soft-primary"
                              src="./assets/images/shapes/03.png"
                              alt=""
                            />
                            <div className="ms-3 w-100">
                              <h6 className="mb-0 ">Two customer is left</h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">Cyst Bni</p>
                                <small className="float-end font-size-12">
                                  2 days ago
                                </small>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <img
                              className="p-1 avatar-40 rounded-pill bg-soft-primary"
                              src="./assets/images/shapes/04.png"
                              alt=""
                            />
                            <div className="w-100 ms-3">
                              <h6 className="mb-0 ">New Mail from Fenny</h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">Cyst Bni</p>
                                <small className="float-end font-size-12">
                                  3 days ago
                                </small>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="py-0 nav-link d-flex align-items-center"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="./assets/images/avatars/01.jpg"
                      alt="User-Profile"
                      className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
                    />
                    <img
                      src="./assets/images/avatars/avtar_1.png"
                      alt="User-Profile"
                      className="theme-color-purple-img img-fluid avatar avatar-50 avatar-rounded"
                    />
                    <img
                      src="./assets/images/avatars/avtar_2.png"
                      alt="User-Profile"
                      className="theme-color-blue-img img-fluid avatar avatar-50 avatar-rounded"
                    />
                    <img
                      src="./assets/images/avatars/avtar_4.png"
                      alt="User-Profile"
                      className="theme-color-green-img img-fluid avatar avatar-50 avatar-rounded"
                    />
                    <img
                      src="./assets/images/avatars/avtar_5.png"
                      alt="User-Profile"
                      className="theme-color-yellow-img img-fluid avatar avatar-50 avatar-rounded"
                    />
                    <img
                      src="./assets/images/avatars/avtar_3.png"
                      alt="User-Profile"
                      className="theme-color-pink-img img-fluid avatar avatar-50 avatar-rounded"
                    />
                    <div className="caption ms-3 d-none d-md-block ">
                      <h6 className="mb-0 caption-title">Rayan Lubbad</h6>
                      <p className="mb-0 caption-sub-title">
                        Software engineer
                      </p>
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="../dashboard/app/user-profile.html"
                      >
                        {t("Profile")}
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../dashboard/auth/sign-in.html"
                      >
                        {t("Logout")}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
export default function load() {
  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
    </Suspense>
  );
}
