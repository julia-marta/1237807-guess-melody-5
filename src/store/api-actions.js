import {loadQuestions, requireAuthorization, redirectToRoute} from "./actions";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

const {QUESTIONS, LOGIN} = APIRoute;
const {SUCCESS} = AppRoute;
const {AUTHORIZED} = AuthorizationStatus;

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(LOGIN)
    .then(() => dispatch(requireAuthorization(AUTHORIZED)))
    .catch((error) => {
      throw error;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AUTHORIZED)))
    .then(() => dispatch(redirectToRoute(SUCCESS)))
);
