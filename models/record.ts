import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';
import Athlete from './athlete';
import LiquidsBeforeExerciser from './liquidsBeforeExercise';
import LiquidsDuringExerciser from './liquidsDuringExercise';
import LiquidsAfterExerciser from './liquidsAfterExercise';

@Entity('record')
export default class Record {
  @PrimaryGeneratedColumn()
  id!: number;

  athlete!: Athlete;

  @Column('float')
  corporal_weigth!: number;

  liquids_before!: LiquidsBeforeExerciser;

  liquids_during!: LiquidsDuringExerciser;

  liquids_after!: LiquidsAfterExerciser;
}
