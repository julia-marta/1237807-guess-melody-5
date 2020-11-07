import React from 'react';
import renderer from 'react-test-renderer';
import {ResultFailScreen} from "./result-fail-screen";
import {noop} from "../../test-data";

it(`should ResultFailScreen render correctly`, () => {
  const tree = renderer
    .create(<ResultFailScreen onReplayButtonClick={noop} resetGameAction={noop} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
