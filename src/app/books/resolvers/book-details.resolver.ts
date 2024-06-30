import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {BooksService} from "../services/books.service";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookDetailsResolver {

  constructor(private readonly booksService: BooksService) {
  }
// Wywołana przed trasą, pobiera parametr bookId
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    const bookIdString = route.paramMap.get('bookId');
    // sprawdza czy nie pusty
    if(bookIdString !== null) {
      const bookId = +bookIdString; // bookid na liczbe
      // observable, który pobiera książkę o danym ID
      return this.booksService.findBookById(bookId);

    } else {
      // dla null
      return new Observable<Book>();
    }
  }
}
