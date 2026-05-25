import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Unit } from 'generated/prisma/client';

export class CreateJournalDto {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  workTypeId!: number;

  @ApiProperty({
    example: 24,
  })
  @IsNumber()
  @IsPositive()
  volume!: number;

  @ApiProperty({
    enum: Unit,
    example: Unit.M3,
  })
  @IsEnum(Unit)
  unit!: Unit;

  @ApiProperty({
    example: 'Иван Петров',
  })
  @IsString()
  workerName!: string;

  @ApiProperty({
    example: '2026-05-25',
  })
  @IsDateString()
  performedAt!: string;
}
