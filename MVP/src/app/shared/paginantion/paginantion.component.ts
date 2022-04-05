
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/feature/customers/customer.model';

@Component({
  selector: 'app-paginantion',
  templateUrl: './paginantion.component.html',
  styleUrls: ['./paginantion.component.scss']
})
export class PaginantionComponent implements OnInit {


  //   @Input() public customerList: Customer[] = [];

  //   @Output() public curPage = new EventEmitter<number>();

  //   //for paginantion declare variable
  //   curPage: number;
  //   itemperpage: number;

  //   constructor() {

  //     // this.curPage.emit(1);
  //     this.curPage = 1;
  //     this.itemperpage = 5;
  //   }

  //   ngOnInit(): void {
  //     this.curPage.emit(1)
  //   }

  //   //fucntion for paginantion
  //   numberOfPages() {
  //     console.log(this.customerList.length);
  //     return Math.ceil(this.customerList.length / this.itemperpage);
  //   };
  //   //  numofpage :any =  this.numberOfPages();

  // }
  // function output() 
  //   throw new Error('Function not implemented.');
  // }


  @Input() itemsPerPage!: number;
  @Input() itemsNumber!: number;
  @Input() allPagesNumber!: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  public _currentPage: number = 1;
 

  constructor() { }

  ngOnInit(): void { }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(page) {
     this._currentPage = page;
    this.changePage.emit(this.currentPage);
  }

  onSetPage(event:any){
      this.currentPage = event.target.value;
  }

  onFirstPage(){
    return  this.currentPage = 1;
  }

  onLastPage(): void {
    this.currentPage = this.allPagesNumber;
  }

  onNextPage(): void {
    this.currentPage += 1;
  } 

  onPreviousPage(): void {
    this.currentPage -= 1 ;
  }
}
