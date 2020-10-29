import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {incrementStep, incrementMistakes} from "../../store/actions";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import Mistakes from "../mistakes/mistakes";
import questionArtistProp from "../question-artist-screen/question-artist.prop";
import {questionGenreProp} from "../question-genre-screen/question-genre.prop";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer";
import {GameType, MAX_MISTAKES_COUNT, AppRoute} from "../../const";

const {ARTIST, GENRE} = GameType;
const {SUCCESS, FAIL, ROOT} = AppRoute;

const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);
const QuestionGenreScreenWrapped = withActivePlayer(withUserAnswer(QuestionGenreScreen));

const GameScreen = (props) => {
  const {questions, step, mistakes, onUserAnswer} = props;
  const question = questions[step];

  if (mistakes >= MAX_MISTAKES_COUNT) {
    return (
      <Redirect to={FAIL} />
    );
  }

  if (step >= questions.length || !question) {
    return (
      <Redirect to={SUCCESS} />
    );
  }

  switch (question.type) {
    case ARTIST:
      return (
        <QuestionArtistScreenWrapped question={question} onAnswer={onUserAnswer} key={step}>
          <Mistakes count={mistakes} />
        </QuestionArtistScreenWrapped>
      );
    case GENRE:
      return (
        <QuestionGenreScreenWrapped question={question} onAnswer={onUserAnswer} key={step}>
          <Mistakes count={mistakes} />
        </QuestionGenreScreenWrapped>
      );
  }

  return <Redirect to={ROOT} />;
};

GameScreen.propTypes = {
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([questionArtistProp, questionGenreProp]).isRequired
  ),
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired,
};

const mapStateToProps = ({GAME, DATA}) => ({
  step: GAME.step,
  mistakes: GAME.mistakes,
  questions: DATA.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer(question, answer) {
    dispatch(incrementStep());
    dispatch(incrementMistakes(question, answer));
  },
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
