import {combineReducers} from "redux";
import {gameData} from "./game-data/game-data";
import {gameProcess} from "./game-process/game-process";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
  USER: `USER`,
};

const {DATA, GAME, USER} = NameSpace;

export default combineReducers({
  [DATA]: gameData,
  [GAME]: gameProcess,
  [USER]: user,
});
