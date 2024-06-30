import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { BookReviewListResolver } from './book-review-list.resolver';
import {ReviewsService} from "../services/reviews.service";

describe('BookListResolver', () => {
  let resolver: BookReviewListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ReviewsService, useValue: {} }
      ]
    });
    resolver = TestBed.inject(BookReviewListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
