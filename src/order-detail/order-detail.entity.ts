import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('order_detail')
export class OrderDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit_price: number;

    @Column()
    quantity: number;

    @Column()
    discount: number;
}