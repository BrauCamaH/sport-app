import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('liquids_after_exercise')
export default class LiquidsAfterExercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('float')
  lost_weigth!: number;

  @Column('float')
  liquid_1l!: number;

  @Column('float')
  liquid_1_5l!: number;
}
