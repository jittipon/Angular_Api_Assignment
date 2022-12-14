import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Books } from '../services/books/books'
import { BookService } from '../services/books/book.services';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
  providers: [MessageService]
})
export class MainComponentComponent implements OnInit {

  bookDialog: boolean = false;
  submitted: boolean = false;
  book!: Books;
  books: Books[] = [];

  constructor(
    private bookService: BookService,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    this.bookService.getBookList().subscribe((data: Books[]) => {
      this.books = data;
      console.log(this.books);
    })
  }

  addBook(name: string, detail: string): void {
    this.bookService.addBook({
      name: name,
      detail: detail
    }).pipe(catchError((err: any): Observable<any> => {
      console.log(err);
      this.showError('add fail');
      return of();
    })).subscribe((data: Books) => {
      this.books.push(data);
      console.log(data);
      this.showSuccess('add success');
      return data;
    })
  }

  deleteBook(id: string): void {
    console.log(id);
    this.bookService.deleteBook(id)
      .pipe(catchError((err: any): Observable<any> => {
        console.log(err);
        this.showError('delete fail');
        return of();
      })).subscribe((data: Books) => {
        this.books = this.books.filter((book) => book.id !== id);
        console.log(data);
        this.showSuccess('delete success');
        return data;
      })
  }

  saveBook(): void {
    this.submitted = true;
    this.addBook(this.book.name, this.book.detail);
    this.bookDialog = false;
    this.book = {
      id: "",
      name: "",
      detail: ""
    };

  }

  showError(text: string): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: text });
  }

  showSuccess(text: string): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: text });
  }

  openNew(): void {
    this.book = {
      id: "",
      name: "",
      detail: ""
    };
    this.submitted = false;
    this.bookDialog = true;
  }

  hideDialog(): void {
    this.bookDialog = false;
    this.submitted = false;
  }


}

