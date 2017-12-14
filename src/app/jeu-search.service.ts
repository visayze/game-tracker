import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Jeu }           from './jeu';

@Injectable()
export class JeuSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Jeu[]> {
    return this.http
               .get(`api/jeux/?name=${term}`)
               .map(response => response.json().data as Jeu[]);
  }
}