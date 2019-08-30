import { NgModule } from '@angular/core';
import { NgLaComponent } from './ng-la.component';
import { LaInputModule } from './components/input/input.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgLaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    NgLaComponent,
    LaInputModule
  ]
})
export class NgLaModule { }
