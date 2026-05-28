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

  const workerNames = [
    'Иван Петров',
    'Сергей Иванов',
    'Алексей Смирнов',
    'Дмитрий Кузнецов',
    'Максим Волков',
  ];

  const units = [Unit.M2, Unit.M3];

  const journals = Array.from({ length: 40 }).map(() => {
    const randomWorkType =
      workTypes[Math.floor(Math.random() * workTypes.length)];

    const randomWorker =
      workerNames[Math.floor(Math.random() * workerNames.length)];

    const randomUnit = units[Math.floor(Math.random() * units.length)];
    const randomVolume = Math.floor(Math.random() * 50) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;

    return {
      workTypeId: randomWorkType.id,
      volume: randomVolume,
      unit: randomUnit,
      workerName: randomWorker,
      performedAt: new Date(`2026-05-${String(randomDay).padStart(2, '0')}`),
    };
  });

  await prisma.journal.createMany({
    data: journals,
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
