import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AddBook, DeleteById, UpdateById } from './app.controller.model';
import { AppService } from './app.service';
import { Book } from './repository/library.repository';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get-all')
  getAll(): Book[] {
    return this.appService.getAll();
  }

  @Post('add-book')
  addBook(@Body() request: AddBook): Book {
    return this.appService.addBook(request);
  }

  @Post('delete')
  deleteById(@Body() request: DeleteById): Book {
    return this.appService.deleteById(request.id);
  }


  @Post('update')
  updateById(@Body() request: UpdateById): Book {
    return this.appService.updateById(request);
  }
}
