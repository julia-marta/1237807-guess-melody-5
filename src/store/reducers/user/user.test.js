import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../actions";
import {checkAuthorization, login} from "../../api-actions";
import {APIRoute, AppRoute, AuthorizationStatus} from "../../../const";
import {noop} from "../../../test-data";

const {REQUIRE_AUTHORIZATION, REDIRECT_TO_ROUTE} = ActionType;
const {LOGIN} = APIRoute;
const {SUCCESS} = AppRoute;
const {AUTHORIZED, NOT_AUTHORIZED} = AuthorizationStatus;

const api = createAPI(noop);

const mockInitialState = {
  status: NOT_AUTHORIZED,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should update status to "authorized"`, () => {
  expect(user(mockInitialState, {
    type: REQUIRE_AUTHORIZATION,
    payload: AUTHORIZED
  })).toEqual({
    status: AUTHORIZED,
  });
});


describe(`Async operation work correctly`, () => {
  it(`Should make a correct API get request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authorizationChecker = checkAuthorization();

    apiMock
      .onGet(LOGIN)
      .reply(200, [{fake: true}]);

    return authorizationChecker(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRE_AUTHORIZATION,
          payload: AUTHORIZED,
        });
      });
  });

  it(`Should make a correct API post request to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const loginSender = login(fakeUser);

    apiMock
      .onPost(LOGIN)
      .reply(200, [{fake: true}]);

    return loginSender(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: REQUIRE_AUTHORIZATION,
          payload: AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: REDIRECT_TO_ROUTE,
          payload: SUCCESS,
        });

      });
  });

});
