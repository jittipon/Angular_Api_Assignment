import { Injectable } from '@nestjs/common';
import { AddBookInput, Book, LibraryRepository, UpdateBookByIdInput } from './repository/library.repository';

@Injectable()
export class AppService {
  constructor(
    private libraryRepository: LibraryRepository
  ) {

  }

  getAll(): Book[] {
    return this.libraryRepository.getAll();
  }

  addBook(input: AddBookInput): Book {
    return this.libraryRepository.addBook(input);
  }

  deleteById(id: string): Book {
    return this.libraryRepository.deleteById(id);
  }

  updateById(input: UpdateBookByIdInput): Book {
    return this.libraryRepository.updateById(input)
  }
}
