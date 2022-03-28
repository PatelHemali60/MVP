import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FilterForm } from '../../../customer.model';
@Injectable()
export class FilterPresenterService {
  private filter: Subject<FilterForm>;
  public filter$ : Observable<FilterForm>;

  constructor(private fb:FormBuilder) { 
    this.filter =  new Subject();
    this.filter$ = this.filter.asObservable();
  }

  public buildForm(){
    return  this.fb.group({
      name: [''],
      email: [''],
      age: [''],
      gender: ['']
    })
  }

  public onSubmit(form:FormGroup){
    //return value
    return this.filter.next(form.value)

  }
}
