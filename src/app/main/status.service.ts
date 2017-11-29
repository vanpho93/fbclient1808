import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StatusService {
    constructor(private http: Http) {}

    getStatuses() {
        const url = 'http://localhost:3000/status/newfeed';
        const token = localStorage.getItem('token');
        const headers = new Headers({ token });
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json());
    }

    hitLike(idStatus: string) {
        const url = 'http://localhost:3000/statuslike/' + idStatus;
        const token = localStorage.getItem('token');
        const headers = new Headers({ token });
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json());
    }
}
