import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginantionComponent } from './paginantion/paginantion.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';
import { FiledropzoneDirective } from './directive/file-drop-zone.directive';
import { PhoneMaskingDirective } from './directive/phone-masking.directive';




@NgModule({
  declarations: [
    PaginantionComponent,
    SearchPipe,
    FiledropzoneDirective,
    PhoneMaskingDirective,
    
  
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PhoneMaskingDirective,
    PaginantionComponent
  , SearchPipe,
  FiledropzoneDirective]
})
export class SharedModule { }
