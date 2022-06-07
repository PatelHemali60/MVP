import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { cars, Category, Customer, CustomerForm } from '../customer.model';
import { CustomerService } from '../customer.service';
import { ToastService } from '../toast.service';



 
@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.scss']
})
export class CustomerFormContainerComponent implements OnInit {
  private urlId:string ='';
  public customerData$:Observable<Customer>;

  //for categories
  public categories$: Observable<Category[]>;

  //for cars
  public cars$ : Observable<cars[]>;

  constructor(private custmerService:CustomerService, private route:Router,private ActiveRoute:ActivatedRoute , private toastService:ToastService) { 
    
    this.customerData$ = new Observable();
    this.categories$ = new Observable<Category[]>();
    //for get cars
    this.cars$ = new Observable<cars[]>();
    
  }
  
  ngOnInit(): void {

  //for toster message

    this.urlId = this.ActiveRoute.snapshot.params['id'];
    console.log(this.urlId);
    if(this.urlId){
      this.customerData$ = this.custmerService.getCustomerById(this.urlId);
    }
    //for get the value of categories
    this.categories$ = this.custmerService.getCustomerCatgeroies();

    //for get value of cars
    this.cars$ = this.custmerService.getcars();
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


  //method for toster
  public doToast(): void {

    this.toastService.open(`Hello world ${Date.now()}`);
  }
  

}
