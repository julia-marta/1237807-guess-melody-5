import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import ResultSuccessScreen from "../result-success-screen/result-success-screen";
import ResultFailScreen from "../result-fail-screen/result-fail-screen";
import GameScreen from "../game-screen/game-screen";
import questionArtistProp from "../question-artist-screen/question-artist.prop";
import questionGenreProp from "../question-genre-screen/question-genre.prop";

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <WelcomeScreen onPlayButtonClick={() => history.push(`/game`)} errorsCount={errorsCount} />
        )}
        />
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/result">
          <ResultSuccessScreen />
        </Route>
        <Route exact path="/lose">
          <ResultFailScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen errorsCount={errorsCount} questions={questions}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
};

export default App;
