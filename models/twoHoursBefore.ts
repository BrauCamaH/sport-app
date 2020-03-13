import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('two_hours_before')
export default class TwoHoursBefore {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('float')
  weigth_5ml!: number;

  @Column('float')
  weigth_7ml!: number;
}
