const Numeral = {
  SINGULAR: 1,
  GENITIVE: 2 || 3 || 4,
  PLURAL: 11 || 12 || 13 || 14
};

const {SINGULAR, GENITIVE, PLURAL} = Numeral;

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const declineNumeral = (number, singular, genitive, plural) => {
  let form;
  switch (true) {
    case number === PLURAL:
      form = plural;
      break;
    case (number % 10) === SINGULAR:
      form = singular;
      break;
    case (number % 10) === GENITIVE:
      form = genitive;
      break;
    default:
      form = plural;
  }
  return `${number} ${form}`;
};
