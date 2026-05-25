import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';

import { JournalService } from './journal.service';
import { GetJournalsDto } from './dto/get-journals.dto';

@ApiTags('Journals')
@Controller('journals')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Post()
  @ApiOperation({
    summary: 'Create journal entry',
  })
  create(@Body() dto: CreateJournalDto) {
    return this.journalService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all journal entries',
  })
  @Get()
  findAll(@Query() query: GetJournalsDto) {
    return this.journalService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get journal entry by id',
  })
  findOne(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.journalService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update journal entry',
  })
  update(
    @Param('id', ParseIntPipe)
    id: number,

    @Body()
    dto: UpdateJournalDto,
  ) {
    return this.journalService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete journal entry',
  })
  remove(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.journalService.remove(id);
  }
}
