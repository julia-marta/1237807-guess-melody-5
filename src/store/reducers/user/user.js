import {extend} from "../../../utils";
import {ActionType} from "../../actions";
import {AuthorizationStatus} from "../../../const";

const {NOT_AUTHORIZED} = AuthorizationStatus;
const {REQUIRE_AUTHORIZATION} = ActionType;

const initialState = {
  status: NOT_AUTHORIZED,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRE_AUTHORIZATION:
      return extend(state, {
        status: action.payload,
      });
  }

  return state;
};

export {user};
