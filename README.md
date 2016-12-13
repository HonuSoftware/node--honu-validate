[![Build Status](https://travis-ci.org/HonuSoftware/node--honu-validate.svg?branch=master)](https://travis-ci.org/HonuSoftware/node--honu-validate)

Very simple package for consolidating validation rules and error responses.

### Simple Example

```javascript
import * as validate from '@honu/validate';

function testMethod(nonEmptyArgument) {
  validate.string.validateNotNullOrEmpty(nonEmptyArgument);
}
```

### API

- `string`
  - `validateString`
  - `validateNotNullOrEmpty`
- `func`
  - `validateFunction`
- `errors`
  - `InputValidationError`
