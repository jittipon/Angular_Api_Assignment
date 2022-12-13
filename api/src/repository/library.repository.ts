import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { mockLibrary } from './library.mock';

export interface UpdateBookByIdInput {
    id: string;
    name: string;
    detail: string;
}

export interface AddBookInput {
    name: string;
    detail: string;
}

export interface Book {
    id: string;
    name: string;
    detail: string;
}
@Injectable()
export class LibraryRepository {
    library: Book[] = mockLibrary;

    private findById(id: string): { index: number, data: Book, } {
        const index = this.library.findIndex(book => book.id === id)
        let book = this.library[index];
        if (!book) {
            throw new Error('ID Not Found');
        }
        console.log(book);

        return {
            index,
            data: book
        };
    }

    addBook(payload: AddBookInput): Book {
        const uuid = uuidv4()
        const book = {
            id: uuid,
            name: payload.name,
            detail: payload.detail
        }
        this.library.push(book);
        return book;
    }

    getById(id: string): Book | undefined {
        return this.library.find(book => book.id === id)
    }

    getAll(): Book[] {
        return this.library;
    }

    deleteById(id: string): Book {
        const data = this.findById(id);
        this.library.splice(data.index, 1);
        return data.data;
    }

    updateById(payload: UpdateBookByIdInput): Book {
        let data = this.findById(payload.id);
        const book = this.library[data.index] = {
            ...data.data,
            name: payload.name,
            detail: payload.detail
        }
        return book;
    }
}
