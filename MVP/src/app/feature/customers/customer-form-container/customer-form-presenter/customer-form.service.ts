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

  constructor(private fb:FormBuilder)
   {
     this.CustomerData = new Subject();
    this.CustomerData$ = this.CustomerData.asObservable();
    }

    //creatform group
    buildFormGroup(){
      return this.fb.group({
        name:['',[Validators.required]],
        age:['',Validators.required],
        email:['',Validators.email],
        gender:['',Validators.required],
        category:[]
      })
    
    }
    //end of the form group

    onSubmit(CustomerForm:FormGroup){
      if(!CustomerForm.valid){
        return
      }
      else{
        this.CustomerData.next(CustomerForm.value)
      }
    }
  

   
    
}
