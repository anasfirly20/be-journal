import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';

@Injectable()
export class JournalService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateJournalDto) {
    return this.prisma.journal.create({
      data: dto,
      include: {
        workType: true,
      },
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

  async findOne(id: number) {
    const journal = await this.prisma.journal.findUnique({
      where: {
        id,
      },

      include: {
        workType: true,
      },
    });

    if (!journal) {
      throw new NotFoundException('Journal entry not found');
    }

    return journal;
  }

  async update(id: number, dto: UpdateJournalDto) {
    await this.findOne(id);

    return this.prisma.journal.update({
      where: {
        id,
      },

      data: dto,

      include: {
        workType: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.journal.delete({
      where: {
        id,
      },
    });
  }
}
