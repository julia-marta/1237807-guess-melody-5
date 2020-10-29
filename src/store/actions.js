import {isArtistAnswerCorrect, isGenreAnswerCorrect} from "../game";
import {GameType} from "../const";

const {ARTIST, GENRE} = GameType;

export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

const {INCREMENT_MISTAKES, INCREMENT_STEP, RESET_GAME, LOAD_QUESTIONS, REQUIRE_AUTHORIZATION, REDIRECT_TO_ROUTE} = ActionType;
const STEP = 1;

export const incrementStep = () => ({
  type: INCREMENT_STEP,
  payload: STEP,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const incrementMistakes = (question, userAnswer) => {
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
    payload: answerIsCorrect ? 0 : STEP,
  };
};

export const loadQuestions = (data) => ({
  type: LOAD_QUESTIONS,
  payload: data,
});


export const requireAuthorization = (status) => ({
  type: REQUIRE_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: REDIRECT_TO_ROUTE,
  payload: url,
});
