import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category, Customer, CustomerForm } from '../../customer.model';
import { CustomerFormService } from '../customer-form-presenter/customer-form.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss'],
  viewProviders: [CustomerFormService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormPresentationComponent implements OnInit {
  
  //input for parent to child send data
    @Input() public set customerCategories(valuecategories:Category[] | null){
      if(valuecategories){
        debugger
        this._customerCategories = valuecategories;
      }
    }
    
    @Input() public set customerData(value:Customer | null){
      if(value){
        this.formTitle = 'Edit Customer';
        this.customerForm.patchValue(value);
        this._customerData = value;
      }
    }
    public get categories():Category[]{
      return this._customerCategories;
    }
    public get customerData() : Customer | null {
      return this._customerData;
    }
    
    @Output() addUser:EventEmitter<CustomerForm>;
    @Output() editUser:EventEmitter<CustomerForm>;
  
    private _customerData!:Customer;
    private _customerCategories!:Category[];
    public customerForm:FormGroup;
    public formTitle:string = "Add Form";
     /** boolean to check if form has been submitted */
   public isFormSubmitted: boolean;
  
  
    
    constructor(public customerFormPresenterService:CustomerFormService,private Location:Location,private activateRoute:ActivatedRoute) { 
      this.customerForm  = this.customerFormPresenterService.buildFormGroup();
      this.addUser = new EventEmitter();
      this.editUser = new EventEmitter();

      
       /** boolean to check if form has been submitted */
      this.isFormSubmitted = false;

    }
  
    ngOnInit(): void {
     
      this.customerFormPresenterService.CustomerData.subscribe((res:CustomerForm)=>{
        res
        if(this.formTitle ==='Edit Customer'){
          this.editUser.emit(res)
        }
        else{
          this.addUser.emit(res)
        }
      })
    }
    
    //form submit
    onSubmit(){
      this.customerFormPresenterService.onSubmit(this.customerForm);
    }
    onCancel(){
      this.Location.back();
    }

    get customerFormControl(){
      return this.customerForm.controls;
    }
  }  
