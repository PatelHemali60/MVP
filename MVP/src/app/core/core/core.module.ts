import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


// import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RagistrationFormComponent } from './component/Medify/ragistration-form.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    RagistrationFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    SidebarComponent,
    RagistrationFormComponent,

  ]
})
export class CoreModule { }
