import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  sendComment(statusId, content) {
    const url = 'http://localhost:3000/comment/';
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('token', token);
    headers.append('Content-Type', 'application/json' );
    const body = JSON.stringify({ statusId, content });
    return this.http.post(url, body, { headers })
    .toPromise()
    .then(res => res.json());
  }
}
