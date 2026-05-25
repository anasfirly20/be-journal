import { Body, Controller, Get, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateJournalDto } from './dto/create-journal.dto';
import { JournalService } from './journal.service';

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
  findAll() {
    return this.journalService.findAll();
  }
}
