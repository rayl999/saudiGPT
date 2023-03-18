import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Demo = () => {
  const navigate = useNavigate();
  const [isSentRequest, setIsSentRequest] = useState(false);
  const [IsFailed, setIsFailed] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, setFormData] = useState(
    {
      caseReport: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const handleChange = (field, event) => {
    formState[field].value = event.target.value;
    setFormData(formState);
  };

  const caseSubmitHandler = async (event) => {
    if (formState.caseReport.value.length > 200) {
      setIsSentRequest(true);

      event.preventDefault();

      axios
        .post("http://8.213.19.24/api/cases/compare", {
          caseReport: formState.caseReport.value,
        })
        .then(function (response) {
          console.log(response);
          navigate("/Output", {
            state: {
              cases: response.data,
              message: "Message from home component",
            },
          });
        })
        .catch(function (error) {
          setIsSentRequest(false);
          setIsFailed(true);
        });
    }

  };
  return (
    <React.Fragment>
      <section className="subscribe section" id="Demo">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="block-header block-header--animated block-header--center">
                <h2 className="title title--medium title--white">Demo</h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <form
                id="subscribe-bot"
                action="#"
                className="subscribe__form form"
              >
                <div className="row ">
                  <div className="col-12 text-center textIndex">
                    {" "}
                    <textarea
                      minLength={200}
                      type="text"
                      name="subscribe_bot__email"
                      placeholder="Case report"
                      className="form__input subscribe__form-input "
                      onChange={(e) => handleChange("caseReport", e)}
                    />
                  </div>
                  <div className="col-12 text-center ">
                    <button
                      className="form__btn subscribe__form-btn "
                      onClick={caseSubmitHandler}
                      disabled={isSentRequest ? true : false}
                    >
                      {isSentRequest ? (
                        <div>
                          <span
                            class="spinner-grow spinner-grow-sm mx-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Loading...
                        </div>
                      ) : (
                        " Try it now"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Demo;
