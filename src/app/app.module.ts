import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { LetterMatchingComponent } from './letter-matching/letter-matching.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ConvertMilePipe } from './pipes/pipes/convert-mile.pipe';
import { PagesComponent } from './pages/pages.component';
import { FirstDirective } from './directives/first.directive';
import { PlaceholdersModule } from './placeholders/placeholders.module';
import { TablesModule } from './tables/tables.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    CardsComponent,
    CardComponent,
    LetterMatchingComponent,
    PipesComponent,
    ConvertMilePipe,
    PagesComponent,
    FirstDirective,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // PlaceholdersModule, // lazy loading yapildi
    // TablesModule, // lazy loading yapildi
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
