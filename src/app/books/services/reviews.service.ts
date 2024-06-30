import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import {BookReview} from "../model/book-review";
import {BookReviewRequest} from "../model/book-review-request";

const API_URL = '/api/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  // HTTP
  constructor(private readonly http: HttpClient) { }
  // Pobieranie recenzji książki po ID książki
  getReviewsByBookId(bookId: number): Observable<BookReview[]> {
    return this.http.get<BookReview[]>(API_URL + "?forBook=" + bookId);
  }
  // Zapisywania/Tworzenie nowej recenzji książki
  saveReview(review: BookReviewRequest): Observable<BookReview> {
    return this.http.post<BookReview>(API_URL, review);
  }
}
