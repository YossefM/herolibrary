import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDetails } from './BookInterface';
import 'rxjs';

@Injectable()
export class libraryService {
  private url: string;
  private dynamicurl: string;
  header = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.url = 'https://api.myjson.com/bins/e2bgy/';
    this.dynamicurl = 'https://api.myjson.com/bins/';
    this.header.append('Content-Type', 'application/json');
  }
  getBooks() {
    return this.http.get<BookDetails[]>(this.url);
  }
  Post(body: any) {
    return this.http.post(this.dynamicurl, body, { headers: this.header })
  }
  Put(book: any) {
    return this.http.put(this.dynamicurl + book.Id, book, { headers: this.header })
  }
  Delete(bookId: number) {
    let url = this.url + bookId;
    return this.http.delete(url, { headers: this.header })
  }
}
