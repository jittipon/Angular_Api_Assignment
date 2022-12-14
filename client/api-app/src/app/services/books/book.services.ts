import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Books } from "./books";

interface Book {
    name: string;
    detail: string;
}

@Injectable()
export class BookService {

    books: Books[] = [];

    constructor(private httpClient: HttpClient) {
    }

    getBookList(): Observable<Books[]> {
        return this.httpClient.get<Books[]>('/api/get-all')
    }
    

    addBook(book: Book) {
        this.httpClient.post('/api/add-book', {
            name: book.name,
            detail: book.detail
        }).subscribe((res) => {
            console.log(res);
        })
    }

    deleteBook(book: Books) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
    }


}