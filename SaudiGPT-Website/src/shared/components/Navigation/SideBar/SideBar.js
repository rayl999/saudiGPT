import React from "react";

import MainMenu from "./MainMenu";
import SecondryMenu from "./SecondryMenu";
import { useLocation } from "react-router-dom";
import "./SideBar.css";
import "./Logo-dark.png";
const SideBar = (props) => {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname != "/auth" ? (
        <aside className="sidebar sidebar-default navs-rounded-all ">
          <div className="sidebar-header d-flex align-items-center justify-content-start">
            <a href="/" className="navbar-brand">
              <div>
                <img
                  src={require("./Logo-dark.png")}
                  id="imgLogo"
                  className="LogoPC"
                  alt=""
                />
              </div>
            </a>
            <div
              className="sidebar-toggle"
              data-toggle="sidebar"
              data-active="true"
            >
              <i className="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 12.2744L19.25 12.2744"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </i>
            </div>
          </div>
          <div className="sidebar-body pt-0 data-scrollbar h-100">
            <div className="sidebar-list h-100">
              <ul className="navbar-nav iq-main-menu h-100" id="sidebar-menu">
                <div className="h-100 w-100 d-flex align-items-start flex-column">
                  <MainMenu></MainMenu>
                  <SecondryMenu></SecondryMenu>
                </div>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer"></div>
        </aside>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default SideBar;
