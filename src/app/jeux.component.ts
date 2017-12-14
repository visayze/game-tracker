import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Jeu }                from './jeu';
import { JeuService }         from './jeu.service';

@Component({
  selector: 'my-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class JeuxComponent implements OnInit {
  jeux: Jeu[];
  selectedJeu: Jeu;

  constructor(
    private jeuService: JeuService,
    private router: Router) { }

  getJeux(): void {
    this.jeuService
        .getJeux()
        .then(jeux => this.jeux = jeux);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.jeuService.create(name)
      .then(jeu => {
        this.jeux.push(jeu);
        this.selectedJeu = null;
      });
  }

  delete(jeu: Jeu): void {
    this.jeuService
        .delete(jeu.id)
        .then(() => {
          this.jeux = this.jeux.filter(h => h !== jeu);
          if (this.selectedJeu === jeu) { this.selectedJeu = null; }
        });
  }

  ngOnInit(): void {
    this.getJeux();
  }

  onSelect(jeu: Jeu): void {
    this.selectedJeu = jeu;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedJeu.id]);
  }
}