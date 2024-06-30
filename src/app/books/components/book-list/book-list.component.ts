import { Component } from '@angular/core';
import { Book } from '../../model/book';
import { ActivatedRoute } from '@angular/router';
import {BooksService} from "../../services/books.service";


@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: Book[];
  // Konstruktor, który wstrzykuje ActivatedRoute i BooksService jako zależności
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly BooksService: BooksService) {
    this.books = this.activatedRoute.snapshot.data['books'];

  }

}
