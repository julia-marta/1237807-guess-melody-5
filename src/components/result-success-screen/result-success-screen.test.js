import React from 'react';
import renderer from 'react-test-renderer';
import {ResultSuccessScreen} from "./result-success-screen";
import {noop} from "../../test-data";

describe(`should ResultSuccessScreen render correctly`, () => {
  describe(`with 3 questions`, () => {
    it(`with 0 mistake`, () => {
      const tree = renderer
        .create(<ResultSuccessScreen questionsCount={3} mistakesCount={0} onReplayButtonClick={noop} resetGameAction={noop} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`with 1 mistake`, () => {
      const tree = renderer
        .create(<ResultSuccessScreen questionsCount={3} mistakesCount={1} onReplayButtonClick={noop} resetGameAction={noop} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`with 2 questions`, () => {
    it(`with 0 mistake`, () => {
      const tree = renderer
        .create(<ResultSuccessScreen questionsCount={2} mistakesCount={0} onReplayButtonClick={noop} resetGameAction={noop} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`with 1 mistake`, () => {
      const tree = renderer
        .create(<ResultSuccessScreen questionsCount={2} mistakesCount={1} onReplayButtonClick={noop} resetGameAction={noop} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
