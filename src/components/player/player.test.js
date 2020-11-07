import React from 'react';
import renderer from 'react-test-renderer';
import Player from "./player";
import {noop} from "../../test-data";

it(`should Player render correctly`, () => {
  const tree = renderer
    .create(
        <Player isPlaying={false} isLoading={true} onPlayButtonClick={noop}>
          <audio />
        </Player>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
