import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UE3DW24 GROUPE 3';
}
/**
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/jeux" routerLinkActive="active">Jeux</a>
    </nav>
    <router-outlet></router-outlet>
  `,**/