import { Component, OnInit } from '@angular/core';

import { Jeu } from './jeu';
import { JeuService } from './jeu.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class DashboardComponent implements OnInit {

  jeux: Jeu[] = [];

  constructor(private jeuService: JeuService) { }

  ngOnInit(): void {
    this.jeuService.getJeux()
      .then(jeux => this.jeux = jeux.slice(0, 5));
  }
}