import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class providerservices extends BaseEntity{
@PrimaryGeneratedColumn()
serviceid!: number; 

@PrimaryColumn()
providerid!: number; 

    @Column()
    cost!: string;

    @Column()
    description!: string;

@Column()
service!: string;
   
}