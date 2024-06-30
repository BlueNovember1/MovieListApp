import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BookReviewComponent} from "./components/book-review/book-review.component";
import {BookReviewCreatorComponent} from "./components/book-review-creator/book-review-creator.component";

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookReviewComponent,
    BookReviewCreatorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class BooksModule { }
