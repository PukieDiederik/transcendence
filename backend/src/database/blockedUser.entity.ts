import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("BlockedUser")
export class BlockedUser {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "target_id" })
    target: User;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "blocker_id" })
    blocker: User;
}
