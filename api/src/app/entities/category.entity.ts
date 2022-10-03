import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovementType } from "./movement-type.entity";
import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne((type) => User)
  @JoinColumn()
  user!: User;

  @Field(() => Int)
  @Column()
  userId!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @Field(() => MovementType)
  @ManyToOne((type) => MovementType)
  @JoinColumn()
  movementType!: MovementType;

  @Field(() => Int)
  @Column()
  movementTypeId!: number;

  @Field(() => Date)
  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  @Column({
    nullable: true,
  })
  updatedAt!: Date;
}
