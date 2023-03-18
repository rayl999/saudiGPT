import React from "react";
import { useTranslation } from "react-i18next";
import About from "./components/About";
import Clients from "./components/Footer";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Team from "./components/Team";

import Header from "./components/Header";
import Docs from "./components/Docs";
import Video from "./components/Video";
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./assets/js/scripts.min.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <About />
          <Video />
          <Demo />
          <Docs />
          <Team />
          <Footer />

          <section
            className="data token-data section section--no-pad-bot"
            style={{ display: "none" }}
          >
            <div className="container">
              <div className="row chart__row align-items-center">
                <div className="col-lg-6">
                  <div className="chart">
                    <img className="chart__bg" src="img/chart-bg.png" alt="" />
                    <div className="chart__wrap">
                      <canvas id="myChart" width={400} height={400} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ico__row">
									
									<div class="ico__timer">
										<h4 class="ico__timer-title">
											ICO will end:
										</h4>

										<div class="timer" id="timer"></div>
									</div>

									<a href="" class="btn btn--medium">Register on ICO</a>
								</div>

          </section>
          {/* <Contact />
          <Footer /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
