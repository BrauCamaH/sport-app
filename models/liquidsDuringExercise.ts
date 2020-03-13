import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('liquids_during_exercise')
export default class LiquidsDuringExercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('float')
  previus_weigth!: number;

  @Column('float')
  liquid!: number;

  @Column('float')
  liters!: number;

  @Column('float')
  post_weigth!: number;

  @Column('float')
  diference!: number;

  @Column('float')
  exercise_time!: number;

  @Column('float')
  sudoration_rate!: number;
}
