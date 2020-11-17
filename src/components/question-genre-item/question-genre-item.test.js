import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreItem from "./question-genre-item";
import {noop, questions} from "../../test-data";

const answer = questions[0].answers[0];

it(`should QuestionGenreItem render correctly`, () => {
  const tree = renderer
    .create(<QuestionGenreItem answer={answer} id={0} onChange={noop} onPlayButtonClick={noop} isPlaying={false} userAnswer={true} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
