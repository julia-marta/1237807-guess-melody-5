import {incrementStep, incrementMistakes, resetGame, ActionType} from "./actions";
import {questions} from "../test-data";

const mockQuestionArtist = questions[1];
const mockQuestionGenre = questions[0];
const mockCorrectAnswerArtist = mockQuestionArtist.answers[2];
const mockIncorrectAnswerArtist = mockQuestionArtist.answers[1];
const mockCorrectAnswerGenre = [true, false, false, true];
const mockIncorrectAnswerGenre = [true, true, true, true];

const {INCREMENT_STEP, INCREMENT_MISTAKES, RESET_GAME} = ActionType;

describe(`Action creators work correctly`, () => {

  it(`Action creator for incrementing step returns correct action`, () => {
    expect(incrementStep()).toEqual({
      type: INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(incrementMistakes(mockQuestionArtist, mockCorrectAnswerArtist)).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(incrementMistakes(mockQuestionArtist, mockIncorrectAnswerArtist)).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(incrementMistakes(mockQuestionGenre, mockCorrectAnswerGenre)).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(incrementMistakes(mockQuestionGenre, mockIncorrectAnswerGenre)).toEqual({
      type: INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for reset game returns action with undefined payload`, () => {
    expect(resetGame()).toEqual({
      type: RESET_GAME,
    });
  });
});
