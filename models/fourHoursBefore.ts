import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('four_hours_before')
export default class FourHoursBefore {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('float')
  weigth_5ml!: number;

  @Column('float')
  weigth_7ml!: number;
}
