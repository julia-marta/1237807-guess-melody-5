import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import ResultSuccessScreen from "../result-success-screen/result-success-screen";
import ResultFailScreen from "../result-fail-screen/result-fail-screen";
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKES_COUNT} from "../../const";

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <WelcomeScreen onPlayButtonClick={() => history.push(`/game`)} errorsCount={MAX_MISTAKES_COUNT} />
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
          <GameScreen errorsCount={MAX_MISTAKES_COUNT} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
