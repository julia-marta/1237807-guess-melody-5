import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/actions";
import {fetchQuestionList, checkAuthorization} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import {AuthorizationStatus} from "./const";

const {NOT_AUTHORIZED} = AuthorizationStatus;

const api = createAPI(() => store.dispatch(requireAuthorization(NOT_AUTHORIZED)));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchQuestionList()),
  store.dispatch(checkAuthorization()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
