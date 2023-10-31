import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Channel")
export class Channel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 32})
    name : string;

    @Column({type: 'boolean', default: false})
    has_owner : boolean;

    @Column({type: 'boolean', default: false})
    is_public: boolean;

    @Column({type: 'boolean', default: false})
    has_password: boolean;

    @Column({type: 'varchar', length: 64})
    password : string;
}