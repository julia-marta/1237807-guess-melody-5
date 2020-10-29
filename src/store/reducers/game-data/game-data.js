import {extend} from "../../../utils";
import {ActionType} from "../../actions";

const {LOAD_QUESTIONS} = ActionType;

const initialState = {
  questions: [],
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return extend(state, {
        questions: action.payload,
      });
  }

  return state;
};

export {gameData};
