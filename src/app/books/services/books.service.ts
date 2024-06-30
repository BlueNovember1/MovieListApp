import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

const API_URL = '/api/books';
// ogónie dostepny
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // HTTP
  constructor(private readonly http: HttpClient) { }
  // Pobranie wszystkich książek z opcjonalnym zapytaniem wyszukiwania
  // GET do API na wszyktie ksiązki
  getAllBooks(query: string = ""): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL);
  }
  // Znalzezienie książki po jej ID
  // GET do API z podanym ID
  findBookById(id: number): Observable<Book> {
    return this.http.get<Book>(API_URL + "/" + id);
  }
  // Aktualizowanie/zapis książki
  // PUT do API z danymi książki
  saveBook(book: Book): Observable<Book> {
    return this.http.put<Book>(API_URL + "/" + book.id, book);
  }
}
