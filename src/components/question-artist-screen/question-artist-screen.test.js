import React from "react";
import renderer from "react-test-renderer";
import QuestionArtistScreen from "./question-artist-screen";
import {questions, noop} from "../../test-data";

const questionArtist = questions[1];

it(`should QuestionArtistScreen render correctly`, () => {
  const tree = renderer
    .create(
        <QuestionArtistScreen question={questionArtist} onAnswer={noop} renderPlayer={noop}>
          <React.Fragment />
        </QuestionArtistScreen>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
