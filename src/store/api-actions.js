import {loadQuestions, requireAuthorization, redirectToRoute} from "./actions";
import {AuthorizationStatus, AppRoute, APIRoute, HttpCode} from "../const";

const {QUESTIONS, LOGIN} = APIRoute;
const {SUCCESS} = AppRoute;
const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
    .catch((error) => {
      throw error;
    })
);

export const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(LOGIN)
    .then((data) => {

      if (data.status === HttpCode.SUCCESS) {
        dispatch(requireAuthorization(AUTHORIZED));
      } else if (data.response.status === HttpCode.UNAUTHORIZED) {
        dispatch(requireAuthorization(NOT_AUTHORIZED));
      }
    })
    .catch((error) => {
      throw error;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AUTHORIZED)))
    .then(() => dispatch(redirectToRoute(SUCCESS)))
);
