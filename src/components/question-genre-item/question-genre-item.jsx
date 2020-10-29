import React from "react";
import PropTypes from "prop-types";
import {answerProp} from "../question-genre-screen/question-genre.prop";

const QuestionGenreItem = (props) => {

  const {answer, id, onChange, renderPlayer, userAnswer} = props;

  return (
    <div className="track">
      {renderPlayer(answer.src, id)}

      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer"
          value={`answer-${id}`} id={`answer-${id}`} checked={userAnswer}
          onChange={(evt) => {
            const value = evt.target.checked;
            onChange(id, value);
          }}
        />
        <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
      </div>
    </div>
  );
};

QuestionGenreItem.propTypes = {
  answer: answerProp.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswer: PropTypes.bool.isRequired,
};

export default QuestionGenreItem;
