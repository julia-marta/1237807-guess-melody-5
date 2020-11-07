import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ResultFailScreen} from "./result-fail-screen";

configure({adapter: new Adapter()});

it(`Click on replay button should call callbacks`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <ResultFailScreen onReplayButtonClick={handleReplayButtonClick} resetGameAction={handleResetAction} />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);

  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
