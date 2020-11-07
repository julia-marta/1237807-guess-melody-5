import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ResultSuccessScreen} from "./result-success-screen";

configure({adapter: new Adapter()});

it(`Click on replay button should call callbacks`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetAction = jest.fn();

  const wrapper = shallow(
      <ResultSuccessScreen questionsCount={3} mistakesCount={1}
        onReplayButtonClick={handleReplayButtonClick} resetGameAction={handleResetAction}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);

  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetAction).toHaveBeenCalledTimes(1);
});
