import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { BooksModel } from './books/books.interface';


@Injectable()
export class SharedService {

  public sideNavState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BooksModel> {
      return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`);
  }

}