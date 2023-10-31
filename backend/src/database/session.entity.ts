import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    JoinColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity("Session")
export class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ type: "varchar", length: 64 })
    session_token: string;

    @CreateDateColumn({ type: "timestamptz" })
    last_used: Date;

    @Column({type: 'timestamptz'})
    expires_at: Date;
}
