import { Component } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute} from "@angular/router";
import {BookReview} from "../../model/book-review";

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  // readonly dla ksązki i review
  readonly book: Book;
  readonly reviews: BookReview[];
  // konstrukotr activeRoute
  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.reviews = this.activatedRoute.snapshot.data['bookReviews'];
  }
  // Dodanie nowej rezcenzji do listy recenzji
  handleReviewAdded(review: BookReview): void {
    this.reviews.push(review);
  }
}
