import { InputValidationError } from '../errors';

function validateString(input) {
  if (typeof input !== 'string') {
    throw new InputValidationError(
      `Input must be a string, was: { type: ${typeof input}, value: ${JSON.stringify(input)} }`
    );
  }
}

function validateNotNullOrEmpty(input) {
  validateString(input);
  if (! input.length) {
    throw new InputValidationError('Input must be a non-empty string');
  }
}

export {
  validateString,
  validateNotNullOrEmpty,
};
