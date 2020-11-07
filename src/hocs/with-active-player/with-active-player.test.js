import React from 'react';
import renderer from 'react-test-renderer';
import withActivePlayer from "./with-active-player";
import {MockComponent} from "../../test-data";

const MockComponentWrapped = withActivePlayer(MockComponent);

it(`should withActivePlayer render correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
