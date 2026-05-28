import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { GetJournalsDto } from './dto/get-journals.dto';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class JournalService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateJournalDto) {
    return this.prisma.journal.create({
      data: {
        ...dto,
        performedAt: new Date(dto.performedAt),
      },
      include: {
        workType: true,
      },
    });
  }

  findAll(query: GetJournalsDto) {
    const { from, to, workTypeId, workerName } = query;

    const where: Prisma.JournalWhereInput = {};

    if (from || to) {
      where.performedAt = {};

      if (from) {
        where.performedAt.gte = new Date(from);
      }

      if (to) {
        const end = new Date(to);

        end.setHours(23, 59, 59, 999);

        where.performedAt.lte = end;
      }
    }

    if (workTypeId) {
      where.workTypeId = Number(workTypeId);
    }

    if (workerName) {
      where.workerName = {
        contains: workerName,
      };
    }

    return this.prisma.journal.findMany({
      where,
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
      data: {
        ...dto,
        performedAt: dto.performedAt ? new Date(dto.performedAt) : undefined,
      },
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
