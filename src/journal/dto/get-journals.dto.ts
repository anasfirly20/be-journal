import { IsDateString, IsOptional } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetJournalsDto {
  @ApiPropertyOptional({
    example: '2026-05-25',
  })
  @IsOptional()
  @IsDateString()
  date?: string;

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
}
