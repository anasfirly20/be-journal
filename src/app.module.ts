import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { JournalModule } from './journal/journal.module';
import { WorkTypeModule } from './work-type/work-type.module';
import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './common/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => validateConfig(config),
    }),
    PrismaModule,
    JournalModule,
    WorkTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
