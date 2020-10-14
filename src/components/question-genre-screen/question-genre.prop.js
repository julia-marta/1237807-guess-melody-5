import PropTypes from "prop-types";
import {GameType} from "../../const";

const {shape, arrayOf, string, oneOf} = PropTypes;
const {ARTIST, GENRE} = GameType;

export default shape({
  answers: arrayOf(shape({
    src: string.isRequired,
    genre: string.isRequired,
  })).isRequired,
  genre: string.isRequired,
  type: oneOf([ARTIST, GENRE]).isRequired,
}).isRequired;
