import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLaModule } from 'ng-la';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaCardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLaModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
