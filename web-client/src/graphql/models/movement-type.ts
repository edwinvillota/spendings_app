import { MovementDirectionEnum } from "../enums/movement-direction.enum";

export interface MovementType {
  id: number;
  name: string;
  direction: MovementDirectionEnum;
  createdAt: Date;
  updatedAt: Date;
}
