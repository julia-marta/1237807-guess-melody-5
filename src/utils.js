const NumeralRules = {
  singular: (modulo) => modulo === 1,
  genitive: (modulo) => modulo === 2 || modulo === 3 || modulo === 4,
  plural: (number) => number === 11 || number === 12 || number === 13 || number === 14
};

export const declineNumeral = (number, singular, genitive, plural) => {
  let form;
  switch (true) {
    case NumeralRules.plural(number):
      form = plural;
      break;
    case NumeralRules.singular(number % 10):
      form = singular;
      break;
    case NumeralRules.genitive(number % 10):
      form = genitive;
      break;
    default:
      form = plural;
  }
  return `${number} ${form}`;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
