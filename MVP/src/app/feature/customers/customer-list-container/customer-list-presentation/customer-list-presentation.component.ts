import { ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer.model';
import { CustomerListService } from '../customer-list-presenter/customer-list.service';
import { Router } from '@angular/router';
import { FilterPresenterService } from './filter-presenter/filter-presenter.service';



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
  isActivatedFilter: boolean = false;


  //flag for sorting
  flag !: number;

  //get value of customer list
  public get customerList(): Customer[] {
    return this._customerList;
  }

  //declare customerList 
  private _customerList!: Customer[];
  private _customerListOriginal!: Customer[];

  //for paginantion

  itemsPerPage: number = 5;
  allPages: number;

  //search
  search: string = "";
  public customerListtemp: Customer[] = [];


  constructor(private customerListservice: CustomerListService, private route: Router,
    private cdr: ChangeDetectorRef) {
    // debugger;

    //intialize delete
    this.delete = new EventEmitter<number>();

    this.allPages = 0;

    //for pagination 
    this.isActivatedFilter = false;// any page size you want 

  }

  //lifecycel hook for paginantion
  ngOnChanges(changes: SimpleChanges) {
    if (changes['customerList'].currentValue = ! null) {

      this.onPageChange();
    }
  }

  ngOnInit(): void {


    this.customerListservice.delete$.subscribe((res: number) => this.delete.emit(res),
      (error) => { console.log('something went wrong') },
      () => { console.log("Complete") }
    );
    // this.customerListservice.Filter$.subscribe(res=> 
    // this._customerList =res);
    this.customerList = [];
    //for filter data subscribe here  
    this.customerListservice.Filter$.subscribe(res => {
      this.isActivatedFilter = true;
 this.cdr.markForCheck();
      //check wathere data is avilabe or not
      this.customerListtemp = res;
      console.log(this.customerListtemp, 'hemali here........');

    })

    this.allPages = Math.ceil(this.customerList.length / this.itemsPerPage);
    // console.log(this.allPages, 'heloooooooooo');
    // this.cdr.detectChanges();
    // //flag indication
    // this.flag = 1;
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
    this.customerListservice.openFilterForm(this.customerListtemp);
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

  //pagination
  onPageChange(page: number = 1): void {
    console.log(page, 'page');

    const startItem = (page - 1) * this.itemsPerPage;
    // console.log(startItem);
    // console.log(this._customerList);
    const endItem = page * this.itemsPerPage;
    this.customerListtemp = this._customerList?.slice(startItem, endItem);
    // console.log(this.customerList.slice(startItem, endItem));
  }


}
