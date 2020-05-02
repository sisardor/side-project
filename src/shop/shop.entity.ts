import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('shop')
export class ShopEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    shop_name: string;

    @Column({ unique: true })
    shop_id: string;
}