import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Jeu } from './jeu';

@Injectable()
export class JeuService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private jeuxUrl = 'api/jeux';  // URL to web api

  constructor(private http: Http) { }

  getJeux(): Promise<Jeu[]> {
    return this.http.get(this.jeuxUrl)
               .toPromise()
               .then(response => response.json().data as Jeu[])
               /**.catch(this.handleError);**/
  }


  getJeu(id: number): Promise<Jeu> {
    const url = `${this.jeuxUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Jeu)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.jeuxUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Jeu> {
    return this.http
      .post(this.jeuxUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Jeu)
      .catch(this.handleError);
  }

  update(jeu: Jeu): Promise<Jeu> {
    const url = `${this.jeuxUrl}/${jeu.id}`;
    return this.http
      .put(url, JSON.stringify(jeu), {headers: this.headers})
      .toPromise()
      .then(() => jeu)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}