export class InternalServerException extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "InternalServerException";
    this.message = String(message);

    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}
