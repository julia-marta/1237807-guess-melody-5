import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenreScreen from "./question-genre-screen";
import {questions, noop} from "../../test-data";

configure({adapter: new Adapter()});

const mockQuestion = questions[0];
const mockEvent = {
  preventDefault() {}
};

it(`Click on form submit should call callback but should not send a form`, () => {
  const userAnswers = [false, false, false, false];
  const onAnswer = jest.fn();

  const wrapper = shallow(
      <QuestionGenreScreen onAnswer={onAnswer} question={mockQuestion}
        renderPlayer={noop} onChange={noop} userAnswers={userAnswers}>
        <React.Fragment />
      </QuestionGenreScreen>);

  const form = wrapper.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {preventDefault: formSendPrevention});

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`User answers passed to callback should be consistent with "userAnswers" prop`, () => {
  const userAnswers = [false, true, false, false];
  const onAnswer = jest.fn((...args) => [...args]);

  const wrapper = mount(
      <QuestionGenreScreen onAnswer={onAnswer} question={mockQuestion}
        renderPlayer={noop} onChange={noop} userAnswers={userAnswers}>
        <React.Fragment />
      </QuestionGenreScreen>
  );

  const form = wrapper.find(`form`);
  const inputTwo = wrapper.find(`input`).at(1);
  const inputs = wrapper.find(`input`);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  expect(inputs.map((it) => it.prop(`checked`))).toEqual(userAnswers);
});
