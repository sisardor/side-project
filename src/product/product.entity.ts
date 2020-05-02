import { BaseEntity } from "src/shared/base.entity";
import { Entity, Column } from "typeorm";

@Entity('product')
export class ProductEntity extends BaseEntity {
 @Column({ nullable: false })
 name: string;

 @Column({ default: 'draft' })
 status: string;

 @Column()
 sky: string;
 
 @Column({ default: 0 })
 views: number;

 @Column()
 url: string;

 @Column()
 type: string;

 @Column({ default: 'CA' })
 currency: string;

 @Column()
 tags: string;

 @Column()
 images: string;

 @Column()
 category_path: string;



}