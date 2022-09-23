import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MovementDirectionEnum } from "../types/movement-direction.enum";

@Entity()
@ObjectType()
export class MovementType extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => MovementDirectionEnum)
  @Column({
    type: "enum",
    enum: MovementDirectionEnum,
    default: MovementDirectionEnum.OUT,
  })
  direction!: MovementDirectionEnum;

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
