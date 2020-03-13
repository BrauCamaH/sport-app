import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('athlete')
export default class Athlete {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  name!: string;

  @Column('float')
  age: number;
}
