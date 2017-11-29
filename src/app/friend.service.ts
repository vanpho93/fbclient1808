import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class FriendService {
  constructor(private http: Http) { }

  getAllPeople() {
    const url = 'http://localhost:3000/user/';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json());
  }

  getAllRelationship() {
    const url = 'http://localhost:3000/friend/';
    const token = localStorage.getItem('token');
    const headers = new Headers({ token });
    return this.http.get(url, { headers })
      .toPromise()
      .then(res => res.json());
  }

  addFriend(idReceiver: string) {
    const url = 'http://localhost:3000/friend/request/' + idReceiver;
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('token', token);
    return this.http.get(url, { headers })
    .toPromise()
    .then(res => res.json());
  }

  acceptFriend(idSender: string) {
    const url = 'http://localhost:3000/friend/accept/' + idSender;
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('token', token);
    return this.http.get(url, { headers })
    .toPromise()
    .then(res => res.json());
  }
}
