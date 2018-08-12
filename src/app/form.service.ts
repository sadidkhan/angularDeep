import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  checkEmailNotTaken(email: string) {
    return this.http
      .get('assets/users.json');
      //.map((res: any) => res.json())
      //.map(users => users.filter(user => user.email === email))
      //.map(users => !users.length);
    // var data = [
    //   { "name": "Paul", "email": "paul@example.com" },
    //   { "name": "Ringo", "email": "ringo@example.com" },
    //   { "name": "John", "email": "john@example.com" },
    //   { "name": "George", "email": "george@example.com" }
    // ];

    // return of(data);
  }
}
