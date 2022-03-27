import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { CustomerService } from './customer.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerFormContainerComponent,
    CustomerListContainerComponent,
    CustomerFormPresentationComponent,
    CustomerListPresentationComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ],
  providers:[CustomerService]
  
})
export class CustomersModule { }
