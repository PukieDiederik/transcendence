import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("Friend")
export class Friend {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "user1_id" })
    user1: User;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "user2_id" })
    user2: User;
}
