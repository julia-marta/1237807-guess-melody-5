import React, {useState} from "react";
import PropTypes from "prop-types";
import QuestionGenreItem from "../question-genre-item/question-genre-item";
import {questionGenreProp} from "./question-genre.prop";

const MemoQuestionGenreItem = React.memo(QuestionGenreItem);

const QuestionGenreScreen = (props) => {
  const {onAnswer, question, children} = props;
  const {answers, genre} = question;
  const [activePlayerId, setActivePlayerId] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(answers.length).fill(false));

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, userAnswers);
          }}>

          {answers.map((answer, i) => (
            <MemoQuestionGenreItem key={`${i}-${answer.src}`} answer={answer}
              id={i} userAnswer={userAnswers[i]} isPlaying={i === activePlayerId}
              onChange={(id, value) => {
                const actualUserAnswers = userAnswers.slice(0);
                actualUserAnswers[id] = value;
                setUserAnswers(actualUserAnswers);
              }}
              onPlayButtonClick={() => setActivePlayerId(activePlayerId === i ? -1 : i)}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

QuestionGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: questionGenreProp,
  children: PropTypes.element.isRequired,
};

export default QuestionGenreScreen;
