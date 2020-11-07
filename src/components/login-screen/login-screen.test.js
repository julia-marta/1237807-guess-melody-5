import React from 'react';
import renderer from 'react-test-renderer';
import {LoginScreen} from "./login-screen";
import {noop} from "../../test-data";

it(`should LoginScreen render correctly`, () => {
  const tree = renderer
    .create(<LoginScreen onReplayButtonClick={noop} onSubmit={noop} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
