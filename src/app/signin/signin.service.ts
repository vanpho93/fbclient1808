import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SignInService {
    constructor(private http: Http) {}

    sendPost(value) {
        const url = 'http://localhost:3000/user/signin';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json());
    }

    checkToken(): Promise<boolean> {
        const token = localStorage.getItem('token');
        if (!token) return Promise.resolve(false);
        const url = 'http://localhost:3000/user/checktoken';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify({ token });
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => true)
        .catch(() => false);
    }
}
