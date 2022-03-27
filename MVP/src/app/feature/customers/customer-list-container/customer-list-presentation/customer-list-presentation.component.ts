import { ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer.model';
import { CustomerListService } from '../customer-list-presenter/customer-list.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders: [CustomerListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListPresentationComponent implements OnInit {


  @Input() public set customerList(value: Customer[] | null) {
    if (value) {
      if (!this._customerListOriginal) {
        this._customerListOriginal = value;
      }
      this._customerList = value;
    }
  }
  @Output() public delete!: EventEmitter<number> ;
  FilterActive:boolean = false;


  //get value of customer list
  public get customerList(): Customer[] {
    return this._customerList = this._customerList;
  }

  //declare customerList 
  private _customerList!: Customer[];
  private _customerListOriginal!:Customer[];


  constructor(private customerListPresentationService:CustomerListService,private CDR : ChangeDetectionStrategy) {
    debugger;
   }

  ngOnInit(): void {
    this.customerListPresentationService.delete$.subscribe((res: number) => this.delete.emit(res),
      (error) => { console.log('something went wrong') },
      () => { console.log("Complete") }
    );
  }



  //delete method
  public onDelete(id: number) {
    this.customerListPresentationService.onDelete(id);
  }

}
