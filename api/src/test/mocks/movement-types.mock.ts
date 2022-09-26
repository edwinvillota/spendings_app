import { MovementType } from "../../app/entities/movement-type.entity";
import { MovementDirectionEnum } from "../../app/types/movement-direction.enum";

export const movementTypesMock: MovementType[] = [
  {
    id: 1,
    name: "INCOME",
    direction: MovementDirectionEnum.IN,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "SPENDING",
    direction: MovementDirectionEnum.OUT,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "SAVING",
    direction: MovementDirectionEnum.OUT,
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "INVESTMENT",
    direction: MovementDirectionEnum.OUT,
    createdAt: new Date(),
  },
] as MovementType[];
