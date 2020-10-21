import PropTypes from "prop-types";
import {GameType} from "../../const";

const {shape, arrayOf, string, oneOf} = PropTypes;
const {ARTIST, GENRE} = GameType;

export const answerProp = shape({
  src: string.isRequired,
  genre: string.isRequired,
});

export const questionGenreProp = shape({
  answers: arrayOf(answerProp).isRequired,
  genre: string.isRequired,
  type: oneOf([ARTIST, GENRE]).isRequired,
}).isRequired;
