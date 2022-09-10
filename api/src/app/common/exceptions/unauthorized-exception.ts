export class UnauthorizedException extends Error {
  constructor(message: string = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedException";
    this.message = String(message);

    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}
