import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
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
    

    // addBook(book: Book): Observable<Book> {
    addBook(book: Book): Observable<Books> {
        return this.httpClient.post<Books>('/api/add-book', {
            name: book.name,
            detail: book.detail
        })
    }

    deleteBook(id: string): Observable<Books> {
        return this.httpClient.post<Books>('/api/delete', {
            id: id,
        })
    }


}