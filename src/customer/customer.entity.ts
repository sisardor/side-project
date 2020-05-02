import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('customer')
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    contact_name: string;

    @Column()
    address: string;

    @Column()
    city: string;

    @Column()
    region: string;

    @Column()
    postal_code: string;
    
    @Column()
    country: string;

    @Column()
    phone: string;
    
}