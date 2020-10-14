import PropTypes from "prop-types";
import {GameType} from "../../const";

const {shape, arrayOf, string, oneOf} = PropTypes;
const {ARTIST, GENRE} = GameType;

export default shape({
  answers: arrayOf(shape({
    artist: string.isRequired,
    picture: string.isRequired,
  })).isRequired,
  song: shape({
    artist: string.isRequired,
    src: string.isRequired,
  }).isRequired,
  type: oneOf([ARTIST, GENRE]).isRequired,
}).isRequired;
