import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserInformation {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 50 })
  F_name: string;

  @Column({ length: 50 })
  L_name: string;

  @Column('int')
  age: number;

  @Column({ unique: true })
  email: string;

  @Column({ length: 100 })
  address: string;
}
