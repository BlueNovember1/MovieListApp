import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookReviewRequest} from "../../model/book-review-request";
import {ReviewsService} from "../../services/reviews.service";
import {BookReview} from "../../model/book-review";

@Component({
  selector: 'bs-book-review-creator',
  templateUrl: './book-review-creator.component.html',
  styleUrl: './book-review-creator.component.scss'
})
export class BookReviewCreatorComponent {
  // Wej = id, wyj = recenzja przez formularz
  @Input() bookId!: number;
  @Output() reviewAdded = new EventEmitter<BookReview>();
  reviewCreateForm!: FormGroup;
  // konstruktor wstrzykuje FormBuilder i ReviewsService jako zależności
  constructor(private  readonly formBuilder: FormBuilder, private readonly bookReviewService: ReviewsService) {
    this.buildForm(); // budowanie fformularza
  }
// Budowa formlarza z polami i walidatorami
  private buildForm(): void {
    this.reviewCreateForm = this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }
  // Wysłanie formualrza
  onSubmit(): void {
    if (this.reviewCreateForm.valid) {
      const createdReview: BookReviewRequest = {
        forBook: this.bookId,
        author: this.reviewCreateForm.value.author,
        title: this.reviewCreateForm.value.title,
        description: this.reviewCreateForm.value.description,
        rate: this.reviewCreateForm.value.rate,
      };
      // Zapis recenzji + subskrypcja wyniku
      this.bookReviewService.saveReview(createdReview).subscribe({
        next: data => {
          console.log(`Review ID ${data.id} added for book with ID ${data.forBook}.`);
          this.reviewAdded.emit(data);
          this.reviewCreateForm.reset();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
  // Listę komunikatów o błędach
  getValidationErrors(field: string): string[] {
    const control = this.reviewCreateForm.get(field);
    const errors: string[] = [];

    if (control && control.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        errors.push('Field is required.');
      }
      if (control.errors?.['min']) {
        errors.push(`Value must be at least ${control.errors['min'].min}.`);
      }
      if (control.errors?.['max']) {
        errors.push(`Value must be at most ${control.errors['max'].max}.`);
      }
    }

    return errors;
  }
}
