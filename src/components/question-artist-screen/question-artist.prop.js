import PropTypes from "prop-types";

const {shape, arrayOf, string} = PropTypes;

export default shape({
  answers: arrayOf(shape({
    artist: string.isRequired,
    picture: string.isRequired,
  })).isRequired,
  song: shape({
    artist: string.isRequired,
    src: string.isRequired,
  }).isRequired,
  type: string.isRequired,
}).isRequired;
