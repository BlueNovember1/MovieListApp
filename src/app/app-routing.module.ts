import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from "./books/components/book-list/book-list.component";
import { BookDetailsComponent } from "./books/components/book-details/book-details.component";
import { BookEditComponent } from "./books/components/book-edit/book-edit.component";
import { BookListResolver } from "./books/resolvers/book-list.resolver";
import { BookDetailsResolver } from "./books/resolvers/book-details.resolver";
import {BookReviewListResolver} from "./books/resolvers/book-review-list.resolver";

const routes: Routes = [
  // głowny path
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  // books
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: BookListResolver
    }
  },
  // reviwes z dynamicznym bookId
  {
    path: 'books/:bookId/reviews',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver,
      bookReviews: BookReviewListResolver,
    }
  },
  // edit z dynamicznym bookId
  {
    path: 'books/:bookId/edit',
    component: BookEditComponent,
    resolve: {
      book: BookDetailsResolver
    }
  }
];
// Konfiguruje moduł routingu
@NgModule({
  // import tras i eksport
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
