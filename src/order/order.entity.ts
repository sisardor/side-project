import { BaseEntity } from "src/shared/base.entity";
import { Entity, Column } from "typeorm";

@Entity('order')
export class OrderEntity extends BaseEntity {
    @Column()
    order_date: Date;

    @Column()
    shipped_date: Date;

    @Column()
    ship_via: number;

    @Column()
    freight: string;
}