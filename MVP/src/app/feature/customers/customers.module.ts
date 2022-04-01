import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { CustomerService } from './customer.service';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FilterPresenatationComponent } from './customer-list-container/customer-list-presentation/filter-presenatation/filter-presenatation.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PaginantionComponent } from 'src/app/shared/shared/paginantion/paginantion.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from 'src/app/shared/Pipes/search.pipe';






@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormContainerComponent,
    CustomerListContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent,
    FilterPresenatationComponent,
    SearchPipe
 
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
    
  ],
  providers:[CustomerService]
  
})
export class CustomersModule { }
