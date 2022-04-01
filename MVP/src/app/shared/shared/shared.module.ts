import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginantionComponent } from './paginantion/paginantion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginantionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PaginantionComponent]
})
export class SharedModule { }
