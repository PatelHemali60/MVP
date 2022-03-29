import { ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer.model';
import { CustomerListService } from '../customer-list-presenter/customer-list.service';
import { Router } from '@angular/router';
import { FilterPresenterService } from './filter-presenter/filter-presenter.service';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss'],
  viewProviders: [CustomerListService, FilterPresenterService],
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
  @Output() public delete: EventEmitter<number>;

  //for activate filter
  public isActivatedFilter: boolean = false;

  //flag for sorting
  flag !: number;

  //for paginantion declare variable
  curPage: number;
  itemperpage: number;


  //get value of customer list
  public get customerList(): Customer[] {
    return this._customerList = this._customerList;
  }

  //declare customerList 
  private _customerList!: Customer[];
  private _customerListOriginal!: Customer[];


  constructor(private customerListservice: CustomerListService, private route: Router,
    private cdr: ChangeDetectorRef,
    private overlay: Overlay) {
    // debugger;

    //intialize delete
    this.delete = new EventEmitter<number>();

    //for pagination 
    this.curPage = 1;
    this.itemperpage = 5; // any page size you want 
  }

  ngOnInit(): void {
    this.customerListservice.delete$.subscribe((res: number) => this.delete.emit(res),
      (error) => { console.log('something went wrong') },
      () => { console.log("Complete") }
    );
    // this.customerListservice.Filter$.subscribe(res=> 
    // this._customerList =res);

    //for filter data subscribe here  
    this.customerListservice.Filter$.subscribe(res => {
      this.isActivatedFilter = true;

      //check wathere data is avilabe or not
      this._customerList = res;

      // console.log(newMentorList);  
      this.cdr.detectChanges();
    })
    //flag indication
    this.flag = 1;

  }


  public onEdit(id: number) {
    this.route.navigateByUrl(`customers/edit/${id}`);

  }

  //delete method
  public onDelete(id: number) {
    this.customerListservice.onDelete(id);
    // this.delete.emit(id);
  }

  public FilterForm() {
    // console.log()
    this.customerListservice.openFilterForm(this._customerList);
    // this.
  }

  //sort table
  public sortTable(data: any) {
    console.log(data, 'heelo');
    if (this.flag === 1) {
      this.flag = -1;
    }
    else {
      this.flag = 1;
    };
    this._customerList = this.customerListservice.sortData(data.target['innerText'], this._customerList, this.flag);
  }

//fucntion for paginantion
  numberOfPages(){
    return Math.ceil(this.customerList.length / this.itemperpage);
  };
  //  numofpage :any =  this.numberOfPages();

}
