import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../model/book";
import {BooksService} from "../../services/books.service";
@Component({
  selector: 'bs-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  // Forumlarz i obiket do edycji
  bookEditForm!: FormGroup;
  book: Book;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly booksService: BooksService,
    private readonly router: Router  // Router do nawigacji
  ) {
    // Pobiera dane książki z resolvera trasy
    this.book = this.activatedRoute.snapshot.data['book'];

    this.buildForm();  // Buduje formularz
    this.fillFormValues();  // Wypełnia formularz wartościami książki
  }

  // Budowanie formularza z walidacjami
  private buildForm(): void {
    this.bookEditForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', Validators.maxLength(1000)],
      year: ['', [Validators.required, Validators.min(1000), Validators.max(2023)]]
    });
  }

  // Wypełneinei forlumarza
  private fillFormValues(): void {
    this.bookEditForm.patchValue({
      title: this.book.title,
      author: this.book.author,
      description: this.book.description,
      year: this.book.year
    });
  }

  // Wysałnie formularza
  onSubmit(): void {
    // Sprawdza, czy formularz jest poprawny
    if (this.bookEditForm.valid) {
      const editedBook: Book = {
        id: this.book.id,
        title: this.bookEditForm.value.title,
        author: this.bookEditForm.value.author,
        description: this.bookEditForm.value.description,
        year: this.bookEditForm.value.year
      };

      // Zapisanie edytowanej książki
      this.booksService.saveBook(editedBook).subscribe({
        next: data => {
          console.log(`Book details updated for book with ID ${data.id}.`);
          this.router.navigate(['/books']);
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

  // Lista błedów
  getValidationErrors(field: string): string[] {
    const control = this.bookEditForm.get(field);
    const errors: string[] = [];

    // Sprawdza, czy kontrolka jest niepoprawna i czy była dotknięta lub zmieniona
    if (control && control.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        errors.push('Field is required.');
      }
      if (control.errors?.['maxlength']) {
        errors.push(`Maximum ${control.errors['maxlength'].requiredLength} characters allowed.`);
      }
      if (control.errors?.['min']) {
        errors.push(`Value must be at least ${control.errors['min'].min}.`);
      }
      if (control.errors?.['max']) {
        errors.push(`Value must be at most ${control.errors['max'].max}.`);
      }
    }

    return errors;  // Zwraca listę komunikatów o błędach
  }
}
