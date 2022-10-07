import { MovementType } from "@/domains/movement-types/models/movement-type";
import { User } from "@/domains/users/models/user";

export interface Category {
  id: number;
  user: User;
  userId: number;
  name: string;
  movementType: MovementType;
}
