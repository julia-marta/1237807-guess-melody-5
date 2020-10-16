import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import Mistakes from "../mistakes/mistakes";
import questionArtistProp from "../question-artist-screen/question-artist.prop";
import questionGenreProp from "../question-genre-screen/question-genre.prop";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";
import {GameType} from "../../const";

const {ARTIST, GENRE} = GameType;

const QuestionArtistScreenWrapped = withAudioPlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withAudioPlayer(QuestionGenreScreen);

const GameScreen = (props) => {
  const {questions, step, mistakes, onUserAnswer, resetGame} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case ARTIST:
      return (
        <QuestionArtistScreenWrapped question={question} onAnswer={onUserAnswer}>
          <Mistakes count={mistakes} />
        </QuestionArtistScreenWrapped>
      );
    case GENRE:
      return (
        <QuestionGenreScreenWrapped question={question} onAnswer={onUserAnswer}>
          <Mistakes count={mistakes} />
        </QuestionGenreScreenWrapped>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistakes(question, answer));
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
