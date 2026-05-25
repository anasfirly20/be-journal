import 'dotenv/config';

import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient, Unit } from 'generated/prisma/client';

const adapter = new PrismaMariaDb({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'journal_db',
  connectionLimit: 5,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.workType.createMany({
    data: [
      { name: 'Кладка перегородок' },
      { name: 'Монтаж опалубки' },
      { name: 'Заливка бетона' },
      { name: 'Монтаж арматуры' },
    ],
    skipDuplicates: true,
  });

  const workTypes = await prisma.workType.findMany();

  await prisma.journal.createMany({
    data: [
      {
        workTypeId: workTypes[0].id,
        volume: 24,
        unit: Unit.M3,
        workerName: 'Иван Петров',
        performedAt: new Date('2026-05-20'),
      },
      {
        workTypeId: workTypes[1].id,
        volume: 12,
        unit: Unit.M2,
        workerName: 'Сергей Иванов',
        performedAt: new Date('2026-05-21'),
      },
    ],
  });

  console.log('Seed completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
