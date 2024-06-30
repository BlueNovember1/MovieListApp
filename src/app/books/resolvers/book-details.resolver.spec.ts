import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { BookDetailsResolver } from './book-details.resolver';
import {BooksService} from "../services/books.service";

describe('BookListResolver', () => {
  let resolver: BookDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BooksService, useValue: {} }
      ]
    });
    resolver = TestBed.inject(BookDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
