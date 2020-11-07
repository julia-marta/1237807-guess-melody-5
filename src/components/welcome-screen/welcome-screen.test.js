import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";
import {MAX_MISTAKES_COUNT} from "../../const";
import {noop} from "../../test-data";

it(`should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorsCount={MAX_MISTAKES_COUNT} onPlayButtonClick={noop} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
