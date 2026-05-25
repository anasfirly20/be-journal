import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateJournalDto } from './dto/create-journal.dto';

@Injectable()
export class JournalService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateJournalDto) {
    return this.prisma.journal.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.journal.findMany({
      include: {
        workType: true,
      },

      orderBy: {
        performedAt: 'desc',
      },
    });
  }
}
