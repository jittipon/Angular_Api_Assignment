import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Books } from "./books";

@Injectable()
export class BookService {

    books: Books[] = [];

    constructor(private httpClient: HttpClient) {
    }

    getUserList(): Observable<Books[]> {
        return this.httpClient.get<Books[]>('/api/get-all')
    }

    addBook(book: Books) {
        this.books.push(book);
    }

    deleteBook(book: Books) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            this.books.splice(index, 1);
        }
    }


}