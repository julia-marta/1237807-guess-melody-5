import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import questions from "./mocks/questions";

const Settings = {
  ERRORS_COUNT: 3
};

const {ERRORS_COUNT} = Settings;

ReactDOM.render(
    <App errorsCount={ERRORS_COUNT} questions={questions}/>,
    document.querySelector(`#root`)
);
