import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { Customer } from '../../customer.model';
@Injectable()
export class CustomerListService {
  private delete:Subject<number>;
  public delete$:Observable<number>;

  constructor(private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = this.delete.asObservable();
    
  }

  public onDelete(id:number){
    this.delete.next(id);
  }
  
}
