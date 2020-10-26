import PropTypes from "prop-types";

const {shape, arrayOf, string} = PropTypes;

export const answerProp = shape({
  src: string.isRequired,
  genre: string.isRequired,
});

export const questionGenreProp = shape({
  answers: arrayOf(answerProp).isRequired,
  genre: string.isRequired,
  type: string.isRequired,
}).isRequired;
