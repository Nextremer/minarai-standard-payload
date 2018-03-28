/* eslint: "no-useless-constructor": 0 */
class BaseError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
  }
}

export class InvalidPayloadError extends BaseError {
  constructor(message) {
    super(message);
  }
}

