import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const {INCREMENT_STEP, INCREMENT_MISTAKES, RESET_GAME} = ActionType;

const initialState = {
  mistakes: 0,
  step: 0,
};

const gameProcess = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      const nextStep = state.step + action.payload;

      return extend(state, {
        step: nextStep,
      });

    case INCREMENT_MISTAKES:

      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case RESET_GAME:

      return extend({}, initialState);
  }

  return state;
};

export {gameProcess};
