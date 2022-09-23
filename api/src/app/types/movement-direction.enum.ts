import { registerEnumType } from "type-graphql";

export enum MovementDirectionEnum {
  IN = "IN",
  OUT = "OUT",
}

registerEnumType(MovementDirectionEnum, {
  name: "MovementDirection",
  description: "Movement direction in/out",
});
