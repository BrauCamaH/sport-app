import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';
import FourHoursBefore from './fourHoursBefore';
import TwoHoursBefore from './twoHoursBefore';

@Entity('liquids_before_exercise')
export default class LiquidsBeforeExercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  severity!: string;

  two_hours!: TwoHoursBefore;

  fours_hours!: FourHoursBefore;
}
