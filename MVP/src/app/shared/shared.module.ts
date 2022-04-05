import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginantionComponent } from './paginantion/paginantion.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';
import { FiledropzoneDirective } from './directive/file-drop-zone.directive';




@NgModule({
  declarations: [
    PaginantionComponent,
    SearchPipe,
    FiledropzoneDirective,
    
  
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PaginantionComponent
  , SearchPipe,
  FiledropzoneDirective]
})
export class SharedModule { }
