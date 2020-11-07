import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player";

configure({adapter: new Adapter()});

it(`Click on play button should call callback`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <Player isLoading={false} isPlaying={false} onPlayButtonClick={handlePlayButtonClick}>
        <audio />
      </Player>);

  const playButton = wrapper.find(`.track__button`);
  playButton.simulate(`click`);

  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
