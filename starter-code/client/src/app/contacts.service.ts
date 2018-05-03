import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ContactsService {

constructor(private http: Http) { }
    getContacts(): Observable<any> {
        return this.http.get('http://localhost:3000/api/journal-entries').map((res: Response) => res.json());
    }
}
