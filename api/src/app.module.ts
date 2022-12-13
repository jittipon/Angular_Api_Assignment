import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryRepository } from './repository/library.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LibraryRepository],
})
export class AppModule { }
