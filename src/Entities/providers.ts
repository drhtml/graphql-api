import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class provider extends BaseEntity{
@PrimaryGeneratedColumn()
providerid!: number; 


    @Column()
    providername!: string;

   
}