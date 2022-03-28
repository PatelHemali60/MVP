import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';

import {  FormGroup } from '@angular/forms';
import { Data } from '@angular/router';

import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';
import { FilterForm } from '../../../customer.model';

@Component({
  selector: 'app-filter-presenatation',
  templateUrl: './filter-presenatation.component.html',
  styleUrls: ['./filter-presenatation.component.scss'],
  providers: [FilterPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPresenatationComponent implements OnInit {

  
  //decalring formgrpup
  public ListForm: FormGroup;


  @Output() public cancel: EventEmitter<Data>;
  /** emitter to emit add mentor data */
  @Output() public addData: EventEmitter<FilterForm>;

  constructor(private filterService: FilterPresenterService ) {


    this.ListForm = this.filterService.buildForm();
    this.addData = new EventEmitter<FilterForm>();
    this.cancel = new EventEmitter<any>();
  

  }

  ngOnInit(): void {
    this.filterService.filter$.subscribe((res) => {
      // debugger
      console.log(res,'ok');
      this.addData.emit(res);


    })

  }

  //filter form submit
  FormFiltersubmit() {

    //subscibe here
    this.filterService.onSubmit(this.ListForm);

  }

  /** on cancel button click */
  public onCancel() {
    // this.emit(new Date());
    this.cancel.emit();
  }


}