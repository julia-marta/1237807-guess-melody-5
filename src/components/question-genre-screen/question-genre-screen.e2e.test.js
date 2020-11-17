import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenreScreen from "./question-genre-screen";
import {questions, noop} from "../../test-data";

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

const mockSetState = jest.fn();

jest.mock(`react`, () => Object.assign({},
    jest.requireActual(`react`), {
      useState: (initial) => [initial, mockSetState],
    }));

configure({adapter: new Adapter()});

const mockQuestion = questions[0];
const mockEvent = {
  preventDefault() {}
};

it(`Click on form submit should call callback but should not send a form`, () => {
  const onAnswer = jest.fn();

  const wrapper = shallow(
      <QuestionGenreScreen onAnswer={onAnswer} question={mockQuestion}>
        <React.Fragment />
      </QuestionGenreScreen>);

  const form = wrapper.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {preventDefault: formSendPrevention});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answers passed to callback should be consistent with user answers from state`, () => {
  const onAnswer = jest.fn();
  const mockUserAnswers = [false, false, false, false];

  const wrapper = mount(
      <QuestionGenreScreen onAnswer={onAnswer} question={mockQuestion}>
        <React.Fragment />
      </QuestionGenreScreen>
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toEqual(mockQuestion);
  expect(onAnswer.mock.calls[0][1]).toEqual(mockUserAnswers);
});

it(`Click on answer input should set consistent value to the state`, () => {

  const wrapper = mount(
      <QuestionGenreScreen onAnswer={noop} question={mockQuestion}>
        <React.Fragment />
      </QuestionGenreScreen>
  );

  const inputOne = wrapper.find(`input`).at(0);
  inputOne.simulate(`change`, {target: {checked: true}});
  expect(mockSetState).toHaveBeenCalledTimes(1);
  expect(mockSetState.mock.calls[0][0]).toEqual([true, false, false, false]);
});

it(`Click on play button should set active player id to the state`, () => {

  const wrapper = mount(
      <QuestionGenreScreen onAnswer={noop} question={mockQuestion}>
        <React.Fragment />
      </QuestionGenreScreen>
  );

  const ButtonThree = wrapper.find(`button.track__button`).at(0);
  ButtonThree.simulate(`click`);
  expect(mockSetState).toHaveBeenCalledTimes(1);
  expect(mockSetState.mock.calls[0][0]).toEqual(3);
});
