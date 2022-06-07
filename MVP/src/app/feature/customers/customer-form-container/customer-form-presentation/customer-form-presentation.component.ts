import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cars, Category, Customer, CustomerForm } from '../../customer.model';
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

  //input message for  toster
  @Input() message: string = '';

  //input for parent to child send data
  @Input() public set customerCategories(valuecategories: Category[] | null) {
    if (valuecategories) {

      this._customerCategories = valuecategories;
    }
  }

  @Input() public set Cars(valuecars: cars[] | null) {

    if (valuecars) {
      this._cars = valuecars;
      this.length = this._cars.length;
    }
  }

  @Input() public set customerData(value: Customer | null) {
    if (value) {
      this.formTitle = 'Edit Customer';
      this.customerForm.patchValue(value);
      this._customerData = value;
    }
  }
  public get categories(): Category[] {
    return this._customerCategories;
  }
  public get customerData(): Customer | null {
    return this._customerData;
  }

  //for cars
  public get Cars(): cars[] {
    return this._cars;
  }

  @Output() addUser: EventEmitter<CustomerForm>;
  @Output() editUser: EventEmitter<CustomerForm>;

  private _customerData!: Customer;
  private _customerCategories!: Category[];
  private _cars!: cars[];
  public customerForm: FormGroup;
  public formTitle: string = "Add Form";
  /** boolean to check if form has been submitted */
  public isFormSubmitted: boolean;
  public selected: number[] = [0];
  public length: number = 0;


  constructor(public customerFormPresenterService: CustomerFormService, private Location: Location, private activateRoute: ActivatedRoute) {
    this.customerForm = this.customerFormPresenterService.buildFormGroup();
    this.addUser = new EventEmitter();
    this.editUser = new EventEmitter();

    this.message = '';
    /** boolean to check if form has been submitted */
    this.isFormSubmitted = false;

  }

  ngOnInit(): void {

    this.customerFormPresenterService.CustomerData.subscribe((res: CustomerForm) => {
      res
      if (this.formTitle === 'Edit Customer') {
        this.editUser.emit(res)
      }
      else {
        this.addUser.emit(res)
      }
    })
  }

  //form submit
  onSubmit() {
    this.customerFormPresenterService.onSubmit(this.customerForm);
  }
  onCancel() {
    this.Location.back();
  }

  get customerFormControl() {
    return this.customerForm.controls;
  }


}  
