import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    creation_ts: number;

    @Column()
    updated_ts: number;

    @Column()
    ending_ts: number;

}