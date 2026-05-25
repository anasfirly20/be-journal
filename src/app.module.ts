import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { JournalModule } from './journal/journal.module';
import { WorkTypeModule } from './work-type/work-type.module';

@Module({
  imports: [PrismaModule, JournalModule, WorkTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
