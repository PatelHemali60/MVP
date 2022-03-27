import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


// import { ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule
  ],
  exports:[
    SidebarComponent,
  ]
})
export class CoreModule { }
