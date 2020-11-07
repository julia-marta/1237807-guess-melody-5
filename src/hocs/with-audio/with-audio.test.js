import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withAudio from "./with-audio";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAudio(MockComponent);

it(`should withAudio render correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped isPlaying={true} src={``} />), {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
