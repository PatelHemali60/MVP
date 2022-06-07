import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cars, Category, Customer, CustomerForm } from './customer.model';

@Injectable()
export class CustomerService {
  
  baseurl = environment.baseURL;
  constructor(private http:HttpClient) { }


  // //get all customer 
  // getCustomer(pageno:number):Observable<Customer[]>{
  //   return this.http.get<Customer[]>(`${this.baseurl}/Customer?page= ' + pageno +'&limit=`)
  // }

  //get all customer 
  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseurl}/Customer`)
  }

  //delete customer
  deleteCustomer(id:number):Observable<number>{
    return this.http.delete<number>(`${this.baseurl}/Customer/${id}`)
  }

  //post a new customer
  addUser(user:CustomerForm):Observable<CustomerForm>{
    return this.http.post<CustomerForm>(`${this.baseurl}/Customer`,user)
  }

  //get data of perticular id
  getCustomerById(id:string):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseurl}/Customer/${id}`)
  }

   //get data of cars
   getcars():Observable<cars[]>{
    return this.http.get<cars[]>(`${this.baseurl}/cars`)
  }

  //editCustomer
  editCustomer(user:CustomerForm,id:string):Observable<CustomerForm>{
    return this.http.put<CustomerForm>(`${this.baseurl}/Customer/${id}`,user)
  }

  //get customer categories
  getCustomerCatgeroies():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseurl}/category`)
  }

}
