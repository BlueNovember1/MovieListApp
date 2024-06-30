import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {BookReview} from "../model/book-review";
import {ReviewsService} from "../services/reviews.service";

@Injectable({
  providedIn: 'root'
})
export class BookReviewListResolver {

  constructor(private readonly bookReviewService: ReviewsService) {
  }

  // Resolve która zostanie wywołana przed trasą
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BookReview[]> {
    // pobiera parametr bookId z trasy
    const bookIdString = route.paramMap.get('bookId');

    // sprawdza czy parametr bookId nie jest null
    if (bookIdString !== null) {
      const bookId = +bookIdString;
      // observable który pobiera recenzje książki o danym ID
      return this.bookReviewService.getReviewsByBookId(bookId);

    } else {
      // null
      return new Observable<BookReview[]>();
    }
  }
}
