import {extend} from "../utils";
import {ActionType} from "./actions";
import questions from "../mocks/questions";
import {MAX_MISTAKES_COUNT} from "../const";

const {INCREMENT_STEP, INCREMENT_MISTAKES, RESET_GAME} = ActionType;

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      return extend(state, {
        step: nextStep,
      });

    case INCREMENT_MISTAKES:
      const mistakesCount = state.mistakes + action.payload;

      if (mistakesCount >= MAX_MISTAKES_COUNT) {
        return extend({}, initialState);
      }

      return extend(state, {
        mistakes: mistakesCount,
      });

    case RESET_GAME:
      return extend({}, initialState);
  }

  return state;
};

export {reducer};
