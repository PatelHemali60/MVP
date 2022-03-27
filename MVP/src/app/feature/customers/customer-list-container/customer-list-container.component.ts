import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss']
})
export class CustomerListContainerComponent implements OnInit {

  public $customerList:Observable<Customer[]>;

  constructor(private customerService:CustomerService) {
    this.$customerList = new Observable();
   }

  ngOnInit(): void {
    this.$customerList = this.customerService.getCustomer();
  }

  //delete user
  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe((res)=>{
      alert("data has been deleted");
      this.$customerList = this.customerService.getCustomer();
    })
  }


}
