import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Category, Customer, CustomerForm } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.scss']
})
export class CustomerFormContainerComponent implements OnInit {
  private urlId:string ='';
  public customerData$:Observable<Customer>;
  public categories$: Observable<Category[]>;

  constructor(private custmerService:CustomerService, private route:Router,private ActiveRoute:ActivatedRoute) { 
    this.customerData$ = new Observable();
    this.categories$ = new Observable<Category[]>();
    
  }
  
  ngOnInit(): void {
    this.urlId = this.ActiveRoute.snapshot.params['id'];
    console.log(this.urlId);
    if(this.urlId){
      this.customerData$ = this.custmerService.getCustomerById(this.urlId);
    }
    this.categories$ = this.custmerService.getCustomerCatgeroies();
  }


  //post form data
  onsubmit(formdata:CustomerForm){
    this.custmerService.addUser(formdata).subscribe((res:CustomerForm)=>{
      alert(`data saved susccefully`)
      this.route.navigateByUrl('customers/list')

    },(error)=>{
      alert(`error occure`)
    })

  }

  editCustomer(Editdata:CustomerForm){
    this.custmerService.editCustomer(Editdata ,this.urlId).subscribe((res)=>{
      alert('data edited succesfully');
      this.route.navigateByUrl('customers/list');
    })

  }

  

}
