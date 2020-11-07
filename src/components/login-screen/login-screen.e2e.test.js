import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LoginScreen} from "./login-screen";
import {noop} from "../../test-data";

configure({adapter: new Adapter()});

it(`Click on replay button should call callback`, () => {
  const handleReplayButtonClick = jest.fn();

  const wrapper = shallow(
      <LoginScreen onReplayButtonClick={handleReplayButtonClick} onSubmit={noop} />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);

  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
});
