import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { Customer } from '../../customer.model';
import { FilterPresenatationComponent } from '../customer-list-presentation/filter-presenatation/filter-presenatation.component';



@Injectable()


export class CustomerListService {
  private delete: Subject<number>;
  public delete$: Observable<number>;

  private FILTER: Subject<Customer[]>;
  public Filter$: Observable<Customer[]>;

  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = this.delete.asObservable();

    this.delete$ = this.delete.asObservable();
    this.delete.subscribe()

    this.Filter$ = new Observable();
    this.FILTER = new Subject();

    this.Filter$ = this.FILTER.asObservable();

  }

  deleteCustomer(id: number) {
    this.delete.next(id);
    // throw new Error('methods not implemented');
  }


  /**
 * get filtered list based on search term
 * @param customerList mentor list
 * @param searchItem search term
 * @returns filtered list
 */


  //for get list
  public getFilteredList(customerList: Customer[], searchItem: string): Customer[] {
    return customerList?.filter((Customer: Customer) => {
      if (
        Customer.id?.toString().includes(searchItem) ||
        Customer.name?.toLowerCase().includes(searchItem) ||
        Customer.email?.toLowerCase().includes(searchItem) ||
        Customer.age ||
        Customer.gender?.toLowerCase().includes(searchItem)
      ) {
        return Customer;
      }
      return false;
    });
  }

  //open ovelay filterform


  public openFilterForm(currentList: Customer[]) {

    console.log(currentList, 'prenster');

    let componentRef: ComponentRef<FilterPresenatationComponent>;
    let overlayRef: OverlayRef;
    // set overlay config
    let overlayConfig: OverlayConfig = new OverlayConfig();

    overlayConfig.hasBackdrop = true;
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().right()


    // create overlay reference
    overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<FilterPresenatationComponent> = new ComponentPortal<FilterPresenatationComponent>(FilterPresenatationComponent);
    // attach overlay with portal
    componentRef = overlayRef.attach(portal);

    // listen to cancel 

    componentRef.instance.cancel.subscribe((res) => {
      overlayRef.detach();
    })

    //add form data write logic for filter data in presenter
    componentRef.instance.addData.subscribe((newList: Customer[]) => {

      //logic for filter data 
      console.log(newList,'new list data');

      let dataKey = Object.keys(currentList[0]);

      let newListData = [...currentList];

      //  let listData = newList ;
      //logic for filter list
      dataKey.forEach((item: any) => {
        if (newList[item]) {
          console.log(newList[item])
          newListData = newListData.filter((data: any) => {
            console.log(data[item])
            return data[item] == newList[item]
          });
        }
      });


      this.FILTER.next(newListData);
      overlayRef.detach();
    })

    // debugger

  }

//filter data
public sortData(field: string, customer: Customer[], flag: number) {
  switch (field) {
    case 'name':
      return (flag === 1) ? customer?.sort((data, second) => (data.name < second.name) ? -1 : (data.name > second.name) ? 1 : 0) : customer?.sort((first, second) => (first.name < second.name) ? 1 : (first.name > second.name) ? -1 : 0);
      break;
    case 'email':
      return (flag === 1) ? customer?.sort((first, second) => (first.email < second.email) ? -1 : (first.email > second.email) ? 1 : 0) : customer?.sort((first, second) => (first.email < second.email) ? 1 : (first.email > second.email) ? -1 : 0);
      break;
    case 'AGE':
      return (flag === 1) ? customer?.sort((first, second) => (first.age < second.age) ? -1 : (first.age > second.age) ? 1 : 0) : customer?.sort((first, second) => (first.age < second.age) ? 1 : (first.age > second.age) ? -1 : 0);
      break;
    // case 'gender':
    //   return (flag === 1) ? customer?.sort((first, second) => (first.birthdate < second.birthdate) ? -1 : (first.birthdate > second.birthdate) ? 1 : 0) : customer?.sort((first, second) => (first.birthdate < second.birthdate) ? 1 : (first.birthdate > second.birthdate) ? -1 : 0);
    //   break;
    default:
      return customer;
      break;
  }
}









  public onDelete(id: number) {
    this.delete.next(id);
  }

}
