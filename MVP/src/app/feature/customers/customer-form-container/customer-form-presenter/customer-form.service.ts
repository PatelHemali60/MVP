import { Injectable } from '@angular/core';
import { FormBuilder , FormGroup ,  Validators } from '@angular/forms';
import { Customer, CustomerForm } from '../../customer.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerFormService {

  public CustomerData:Subject<CustomerForm>;
  public CustomerData$:Observable<CustomerForm>;
 public phonenumber : string;

  constructor(private fb:FormBuilder)
   {
     this.CustomerData = new Subject();
    this.CustomerData$ = this.CustomerData.asObservable();
    this.phonenumber = '';
  }

  /**
   * @name buildform
   *  @description it builds customer form
   */
    //creatform group
    buildFormGroup(){
      return this.fb.group({
        name:['',[Validators.required]],
        age:['',Validators.required],
        email:['',Validators.email],
        gender:['',Validators.required],
        phoneNumber:['', [Validators.required, Validators.minLength(15)]],
        category:[],
        cars:[]
      })
    
    }
    //end of the form group

   public onSubmit(CustomerForm: FormGroup){
      // this.phonenumber = CustomerForm.phoneNumber.replace(/\s|-|\+91/g, '');
      if(!CustomerForm.valid){
        return
      }
      else{
        this.CustomerData.next(CustomerForm.value)
      }
    }

  
    
}
