import { MovementDirectionEnum } from "./movement-direction.enum";

export interface MovementType {
  id: number;
  name: string;
  direction: MovementDirectionEnum;
  createdAt: Date;
  updatedAt: Date;
}
