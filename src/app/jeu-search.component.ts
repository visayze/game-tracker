import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { JeuSearchService } from './jeu-search.service';
import { Jeu } from './jeu';

@Component({
  selector: 'jeu-search',
  templateUrl: './jeu-search.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [JeuSearchService]
})
export class JeuSearchComponent implements OnInit {
  jeux: Observable<Jeu[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private jeuSearchService: JeuSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.jeux = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.jeuSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Jeu[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Jeu[]>([]);
      });
  }

  gotoDetail(jeu: Jeu): void {
    let link = ['/detail', jeu.id];
    this.router.navigate(link);
  }
}