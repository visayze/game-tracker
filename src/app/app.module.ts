import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeaderComponent }   from './header.component';
import { DashboardComponent }   from './dashboard.component';
import { JeuxComponent }      from './jeux.component';
import { JeuDetailComponent }  from './jeu-detail.component';
import { JeuService }          from './jeu.service';
import { JeuSearchComponent }  from './jeu-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    JeuDetailComponent,
    JeuxComponent,
    JeuSearchComponent
  ],
  providers: [ JeuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
