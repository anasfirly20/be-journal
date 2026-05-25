import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { JournalModule } from './journal/journal.module';

@Module({
  imports: [PrismaModule, JournalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
