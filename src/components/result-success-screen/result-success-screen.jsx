import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import {declineNumeral} from "../../utils";

const ResultSuccessScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick, resetGame} = props;
  const correctAnswersCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        Вы ответили правильно на {declineNumeral(correctAnswersCount, `вопрос`, `вопроса`, `вопросов`)} и совершили {declineNumeral(mistakesCount, `ошибку`, `ошибки`, `ошибок`)}
      </p>
      <button className="replay" type="button"
        onClick={() => {
          resetGame();
          onReplayButtonClick();
        }}>
        Сыграть ещё раз
      </button>
    </section>
  );
};

ResultSuccessScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  questionsCount: state.step,
  mistakesCount: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {ResultSuccessScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ResultSuccessScreen);

