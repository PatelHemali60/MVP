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
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from './toast.service';
import { NgSelectModule } from '@ng-select/ng-select';






@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormContainerComponent,
    CustomerListContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent,
    FilterPresenatationComponent,
 
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgSelectModule
    
  ],
  providers:[CustomerService,ToastService]
  
})
export class CustomersModule { }
