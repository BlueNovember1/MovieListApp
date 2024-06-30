import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
// testy
describe('BookDetailComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  // przed testami impoet modułow i komponetnów
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    // cykl wykrywania zmian Angulara, aby zainicjować komponent
    fixture.detectChanges();
  });
  // pojednczy test, sprawdza, czy komponent został poprawnie utworzony
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
