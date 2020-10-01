import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import LoginScreen from "../login-screen/login-screen";
import ResultSuccessScreen from "../result-success-screen/result-success-screen";
import ResultFailScreen from "../result-fail-screen/result-fail-screen";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtistScreen />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenreScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/result">
          <ResultSuccessScreen />
        </Route>
        <Route exact path="/lose">
          <ResultFailScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
