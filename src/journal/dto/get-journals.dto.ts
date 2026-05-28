import { IsDateString, IsOptional, IsString } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetJournalsDto {
  @ApiPropertyOptional({
    example: '2026-05-01',
  })
  @IsOptional()
  @IsDateString()
  from?: string;

  @ApiPropertyOptional({
    example: '2026-05-31',
  })
  @IsOptional()
  @IsDateString()
  to?: string;

  @ApiPropertyOptional({
    example: 1,
  })
  @IsOptional()
  workTypeId?: number;

  @ApiPropertyOptional({
    example: 'Иван',
  })
  @IsOptional()
  @IsString()
  workerName?: string;
}
