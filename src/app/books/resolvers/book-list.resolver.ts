import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookListResolver {

  constructor(private readonly booksService: BooksService) {
  }

  // Resolve która zostanie wywołana przed aktywacją trasy
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
    // Observable który pobiera listę książek
    return this.booksService.getAllBooks();
  }
}
