import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/feature/customers/customer.model';

@Pipe({
  name: 'searchText'
})
export class SearchPipe implements PipeTransform {

  transform(customerForm: Customer[], search:string): Customer[] {
    // console.log(search);
    if(search== ' '){
      return customerForm;
    }
    return customerForm.filter((text:Customer) =>{
      return text.name.toLowerCase().match(search.toLocaleLowerCase())
    })
   
  }

}