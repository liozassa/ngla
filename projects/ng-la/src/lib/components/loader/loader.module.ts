import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaInputModule } from '../input';
import { LaLoaderComponent } from './loader.component';
import { LaLoaderService } from './loader.service';


@NgModule({
  declarations: [
    LaLoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LaInputModule
  ],
  exports: [
    LaLoaderComponent
  ],
  providers: [
    LaLoaderService
  ],
  entryComponents: [LaLoaderComponent]
})
export class LaLoaderModule { }
