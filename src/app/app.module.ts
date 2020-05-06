import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLaModule } from 'ng-la';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaCardComponent } from './card/card.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgLaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
