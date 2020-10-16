import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../game";
import {GameType} from "../const";

const {ARTIST, GENRE} = GameType;

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
};

const {INCREMENT_MISTAKES, INCREMENT_STEP, RESET_GAME} = ActionType;
const STEP = 1;

export const ActionCreator = {
  incrementStep: () => ({
    type: INCREMENT_STEP,
    payload: STEP,
  }),
  resetGame: () => ({
    type: RESET_GAME,
  }),
  incrementMistakes: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },
};
