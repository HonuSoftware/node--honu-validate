import ExtendableError from 'es6-error';

class InputValidationError extends ExtendableError {
  constructor(message = 'Invalid input') {
    super(message);
  }
}

export {
  InputValidationError,
};
