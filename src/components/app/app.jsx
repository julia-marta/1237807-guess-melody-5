import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import LoginScreen from "../login-screen/login-screen";
import ResultSuccessScreen from "../result-success-screen/result-success-screen";
import ResultFailScreen from "../result-fail-screen/result-fail-screen";
import GameScreen from "../game-screen/game-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {MAX_MISTAKES_COUNT, AppRoute} from "../../const";

const {ROOT, GAME, LOGIN, SUCCESS, FAIL} = AppRoute;

const App = () => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={ROOT} render={({history}) => (
          <WelcomeScreen onPlayButtonClick={() => history.push(GAME)} errorsCount={MAX_MISTAKES_COUNT} />
        )}
        />
        <Route exact path={LOGIN} render={({history}) => (
          <LoginScreen onReplayButtonClick={() => history.push(GAME)} />
        )}
        />
        <PrivateRoute exact path={SUCCESS} render={({history}) => {
          return <ResultSuccessScreen onReplayButtonClick={() => history.push(GAME)} />;
        }} />

        <Route exact path={FAIL} render={({history}) => (
          <ResultFailScreen onReplayButtonClick={() => history.push(GAME)} />
        )}
        />
        <Route exact path={GAME}>
          <GameScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
