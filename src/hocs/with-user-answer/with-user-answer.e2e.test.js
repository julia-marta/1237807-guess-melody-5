import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer";
import {SimpleMockComponent, questions, noop} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponentWrapped = withUserAnswer(SimpleMockComponent);
const mockQuestion = questions[0];

it(`Callback from props call should change answers props`, () => {
  const wrapper = shallow(
      <MockComponentWrapped question={mockQuestion} onAnswer={noop}/>);

  expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

  wrapper.props().onChange(0, true);
  expect(wrapper.props().userAnswers).toEqual([true, false, false, false]);

  wrapper.props().onChange(0, false);
  expect(wrapper.props().userAnswers).toEqual([false, false, false, false]);

  wrapper.props().onChange(1, true);
  expect(wrapper.props().userAnswers).toEqual([false, true, false, false]);
});
