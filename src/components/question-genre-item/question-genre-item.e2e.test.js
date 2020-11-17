import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenreItem from "./question-genre-item";
import {noop, questions} from "../../test-data";

Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
  configurable: true,
  get() {
    return () => {};
  }
});

Object.defineProperty(global.window.HTMLMediaElement.prototype, `pause`, {
  configurable: true,
  get() {
    return () => {};
  }
});

configure({adapter: new Adapter()});

it(`Click on input should call callback and pass id and checked status`, () => {
  const answer = questions[0].answers[0];
  const onChange = jest.fn();

  const wrapper = mount(
      <QuestionGenreItem answer={answer} id={0} onChange={onChange} onPlayButtonClick={noop}
        isPlaying={false} userAnswer={true} />);

  const input = wrapper.find(`input`);

  input.simulate(`change`, {target: {checked: true}});
  expect(onChange.mock.calls[0][0]).toEqual(wrapper.props().id);
  expect(onChange.mock.calls[0][1]).toEqual(true);

  input.simulate(`change`, {target: {checked: false}});
  expect(onChange.mock.calls[1][1]).toEqual(false);
  expect(onChange).toHaveBeenCalledTimes(2);
});
