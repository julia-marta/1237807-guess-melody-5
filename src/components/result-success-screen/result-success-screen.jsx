import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {resetGame} from "../../store/actions";
import {declineNumeral} from "../../utils";

const ResultSuccessScreen = (props) => {
  const {questionsCount, mistakesCount, onReplayButtonClick, resetGameAction} = props;
  const correctAnswersCount = questionsCount - mistakesCount;

  const replayButtonClickHandle = useCallback(
      () => {
        resetGameAction();
        onReplayButtonClick();
      }, []
  );

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        Вы ответили правильно на {declineNumeral(correctAnswersCount, `вопрос`, `вопроса`, `вопросов`)} и совершили {declineNumeral(mistakesCount, `ошибку`, `ошибки`, `ошибок`)}
      </p>
      <button className="replay" type="button" onClick={replayButtonClickHandle}>
        Сыграть ещё раз
      </button>
    </section>
  );
};

ResultSuccessScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGameAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({GAME}) => ({
  questionsCount: GAME.step,
  mistakesCount: GAME.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  resetGameAction() {
    dispatch(resetGame());
  },
});

export {ResultSuccessScreen};
export default connect(mapStateToProps, mapDispatchToProps)(ResultSuccessScreen);
