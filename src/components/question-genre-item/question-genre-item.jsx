import React, {useCallback} from "react";
import PropTypes from "prop-types";
import Player from "../player/player";
import {answerProp} from "../question-genre-screen/question-genre.prop";

const QuestionGenreItem = (props) => {

  const {answer, id, isPlaying, onChange, onPlayButtonClick, userAnswer} = props;

  const answerChangeHandle = useCallback(
      (evt) => {
        const value = evt.target.checked;
        onChange(id, value);
      }, [onChange]
  );

  return (
    <div className="track">
      <Player src={answer.src} isPlaying={isPlaying} onPlayButtonClick={onPlayButtonClick}/>

      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer"
          value={`answer-${id}`} id={`answer-${id}`} checked={userAnswer}
          onChange={answerChangeHandle}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

QuestionGenreItem.propTypes = {
  answer: answerProp.isRequired,
  id: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  userAnswer: PropTypes.bool.isRequired,
};

export default QuestionGenreItem;
