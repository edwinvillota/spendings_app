import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class IncomeCategory extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({
    unique: true,
    nullable: false,
  })
  name!: string;

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
