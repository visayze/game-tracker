import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Jeu }        from './jeu';
import { JeuService } from './jeu.service';

@Component({
  selector: 'jeu-detail',
  templateUrl: './jeu-detail.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class JeuDetailComponent implements OnInit {
  jeu: Jeu;

  constructor(
    private jeuService: JeuService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.jeuService.getJeu(+params.get('id')))
      .subscribe(jeu => this.jeu = jeu);
  }

  save(): void {
    this.jeuService.update(this.jeu)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}