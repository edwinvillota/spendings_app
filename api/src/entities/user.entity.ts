import { Field, ID, ObjectType } from "type-graphql";
import { Service } from "typedi";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({
    unique: true,
  })
  name!: string;

  @Field(() => String)
  @Column()
  email!: string;
}
