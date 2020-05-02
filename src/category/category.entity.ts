import { BaseEntity } from "src/shared/base.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('category')
export class CategoryEntity extends BaseEntity {
    @Column({ nullable: false, default: 0 })
    level: number;

    @Column({ nullable: false })
    name: string;

    @Column()
    path: string;

    @Column()
    slug: string;

    @Column()
    meta_title: string;

    @Column()
    meta_description: string;

    @Column()
    page_title: string;

    @Column()
    page_description: string;

    @Column({ default: '' })
    parent: string;

    @Column({ default: '' })
    children_ids: string;

    @Column({ default: '' })
    full_path_taxonomy_ids: string;

}