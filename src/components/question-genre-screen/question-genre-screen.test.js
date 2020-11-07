import React from 'react';
import renderer from 'react-test-renderer';
import QuestionGenreScreen from "./question-genre-screen";
import {noop, questions} from "../../test-data";

const questionGenre = questions[0];

it(`should QuestionGenreScreen render correctly`, () => {
  const tree = renderer
    .create(
        <QuestionGenreScreen onAnswer={noop} onChange={noop} renderPlayer={noop}
          question={questionGenre} userAnswers={[false, false, false, false]} >
          <React.Fragment />
        </QuestionGenreScreen>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
