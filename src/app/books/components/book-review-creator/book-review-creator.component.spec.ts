import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReviewCreatorComponent } from './book-review-creator.component';

describe('BookReviewCreatorComponent', () => {
  let component: BookReviewCreatorComponent;
  let fixture: ComponentFixture<BookReviewCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookReviewCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookReviewCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
