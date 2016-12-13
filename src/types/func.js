import { InputValidationError } from '../errors';

function validateFunction(input) {
  if (input || typeof input !== 'function') {
    throw new InputValidationError('Input must be a non-empty string');
  }
}

const func = {
  validateFunction,
};

export { func };
