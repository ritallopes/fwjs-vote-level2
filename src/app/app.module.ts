import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VotacaoCardComponent} from './votacaocard.component';
import {CabineComponent} from './cabine.component';
import {ResultadoComponent} from './resultado.component';



@NgModule({
  declarations: [
    AppComponent,
    VotacaoCardComponent,
    CabineComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
