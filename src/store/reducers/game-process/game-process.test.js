import {gameProcess} from "./game-process";
import {ActionType} from "../../actions";

const {INCREMENT_STEP, INCREMENT_MISTAKES, RESET_GAME} = ActionType;

const mockInitialState = {
  step: 0,
  mistakes: 0,
};


it(`Reducer without additional parameters should return initial state`, () => {
  expect(gameProcess(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should increment current step by a given value`, () => {
  expect(gameProcess(mockInitialState, {
    type: INCREMENT_STEP,
    payload: 1,
  })).toEqual({
    step: 1,
    mistakes: 0,
  });

  expect(gameProcess(mockInitialState, {
    type: INCREMENT_STEP,
    payload: 0,
  })).toEqual(mockInitialState);
});

it(`Reducer should increment number of mistakes by a given value`, () => {
  expect(gameProcess(mockInitialState, {
    type: INCREMENT_MISTAKES,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 1,
  });

  expect(gameProcess(mockInitialState, {
    type: INCREMENT_MISTAKES,
    payload: 0,
  })).toEqual(mockInitialState);
});

it(`Reducer should returninitial state on reset game`, () => {
  expect(gameProcess({
    step: 5,
    mistakes: 1,
  }, {
    type: RESET_GAME,
    payload: null,
  })).toEqual(mockInitialState);

  expect(gameProcess(mockInitialState, {
    type: RESET_GAME,
    payload: null,
  })).toEqual(mockInitialState);

  expect(gameProcess({
    step: 2,
    mistakes: 0,
  }, {
    type: RESET_GAME,
    payload: null,
  })).toEqual(mockInitialState);
});
