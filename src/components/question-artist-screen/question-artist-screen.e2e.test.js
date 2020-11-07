import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionArtistScreen from "./question-artist-screen";
import {questions, noop} from "../../test-data";

configure({adapter: new Adapter()});

const mockQuestion = questions[1];
const mockEvent = {
  preventDefault() {}
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const userAnswer = mockQuestion.answers[0];
  const onAnswer = jest.fn();

  const wrapper = shallow(
      <QuestionArtistScreen onAnswer={onAnswer} question={mockQuestion} renderPlayer={noop}>
        <React.Fragment/>
      </QuestionArtistScreen>
  );

  const answerInputs = wrapper.find(`input`);
  const answerOne = answerInputs.at(0);

  answerOne.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(mockQuestion);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
