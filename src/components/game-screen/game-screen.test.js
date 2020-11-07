import React from "react";
import renderer from "react-test-renderer";
import {GameScreen} from "./game-screen";
import {questions, noop} from "../../test-data";

describe(`should GameScreen render correctly`, () => {
  it(`with QuestionGenreScreen`, () => {
    const tree = renderer
      .create(
          <GameScreen questions={questions} step={0} mistakes={0} onUserAnswer={noop} />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with QuestionArtistScreen`, () => {
    const tree = renderer
      .create(
          <GameScreen questions={questions} step={1} mistakes={0} onUserAnswer={noop} />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
