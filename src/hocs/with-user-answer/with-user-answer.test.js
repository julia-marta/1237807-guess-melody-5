import React from 'react';
import renderer from 'react-test-renderer';
import withUserAnswer from "./with-user-answer";
import {MockComponent, questions, noop} from "../../test-data";

const questionGenre = questions[0];
const MockComponentWrapped = withUserAnswer(MockComponent);

it(`should withUserAnswer render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped question={questionGenre} onAnswer={noop}>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
