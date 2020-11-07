import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

it(`Click on welcome button should call callback`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <WelcomeScreen errorsCount={3} onPlayButtonClick={handlePlayButtonClick}/>
  );

  const welcomeButton = wrapper.find(`button.welcome__button`);
  welcomeButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
