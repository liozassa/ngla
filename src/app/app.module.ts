import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaToastModule, NgLaModule } from 'ng-la';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaCardComponent } from './card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { LaToastService } from 'projects/ng-la/src/public-api';

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
  providers: [
    LaToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
