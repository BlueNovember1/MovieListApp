import { Component, Input } from '@angular/core';
import {BookReview} from "../../model/book-review";

@Component({
  selector: 'bs-book-review',
  templateUrl: './book-review.component.html',
  styleUrl: './book-review.component.scss'
})
// Recenzja obkietu ksiązki
export class BookReviewComponent {
  @Input() review!: BookReview;

}
