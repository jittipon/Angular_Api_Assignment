import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../services/books/books'
import { BookService } from '../services/books/book.services';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  books: Books[] = [];

  constructor(
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.bookService.getUserList().subscribe((data: Books[]) => {
      this.books = data;
      console.log(this.books);
    })
  }

}
