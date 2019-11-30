import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaDialogComponent } from './dialog.component';
import { LaButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    LaDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LaButtonModule
  ],
  exports: [
    LaDialogComponent
  ],
})
export class LaDialogModule { }
