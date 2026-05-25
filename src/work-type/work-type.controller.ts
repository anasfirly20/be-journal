import { Controller, Get } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { WorkTypeService } from './work-type.service';

@ApiTags('Work Types')
@Controller('work-types')
export class WorkTypeController {
  constructor(private readonly workTypeService: WorkTypeService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all work types',
  })
  findAll() {
    return this.workTypeService.findAll();
  }
}
