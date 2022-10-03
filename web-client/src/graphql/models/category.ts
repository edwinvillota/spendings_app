import { MovementType } from "./movement-type";
import { User } from "./user";

export interface Category {
  id: number;
  user: User;
  userId: number;
  name: string;
  movementType: MovementType;
}
