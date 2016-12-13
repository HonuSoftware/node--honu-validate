import chai from 'chai';
const assert = chai.assert;

import { string, errors } from '../../src';

describe('validate:string', () => {
  describe('validateString', () => {
    it('throws on non-string type', () => {
      assert.throws(() => {
        string.validateString(123);
      }, errors.InputValidationError);
    });
    it('throws on null', () => {
      assert.throws(() => {
        string.validateString(null);
      }, errors.InputValidationError);
    });
    it('throws on undefined', () => {
      assert.throws(() => {
        string.validateString(undefined);
      }, errors.InputValidationError);
    });
    it('returns on valid string', () => {
      string.validateString('');
    });
  });

  describe('validateNotNullOrEmpty', () => {
    it('throws on empty string', () => {
      assert.throws(() => {
        string.validateNotNullOrEmpty('');
      }, errors.InputValidationError);
    });
    it('returns on non-empty string', () => {
      string.validateNotNullOrEmpty('test');
    });
  });
});
