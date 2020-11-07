import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {gameData} from "./game-data";
import {ActionType} from "../../actions";
import {fetchQuestionList} from "../../api-actions";
import {APIRoute} from "../../../const";
import {questions, noop} from "../../../test-data";

const {LOAD_QUESTIONS} = ActionType;
const {QUESTIONS} = APIRoute;

const api = createAPI(noop);

const mockInitialState = {
  questions: [],
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(gameData(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should update questions by load questions`, () => {
  expect(gameData(mockInitialState, {
    type: LOAD_QUESTIONS,
    payload: questions,
  })).toEqual({
    questions,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionsLoader = fetchQuestionList();

    apiMock
      .onGet(QUESTIONS)
      .reply(200, [{fake: true}]);

    return questionsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_QUESTIONS,
          payload: [{fake: true}],
        });
      });
  });
});
