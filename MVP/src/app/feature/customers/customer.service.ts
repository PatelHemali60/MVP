import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, Customer, CustomerForm } from './customer.model';

@Injectable()
export class CustomerService {
  baseurl = environment.baseURL;
  constructor(private http:HttpClient) { }

  //get all customer 
  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.baseurl}/customer`)
  }

  //delete customer
  deleteCustomer(id:number):Observable<number>{
    return this.http.delete<number>(`${this.baseurl}/customer/${id}`)
  }

  //post a new customer
  addUser(user:CustomerForm):Observable<CustomerForm>{
    return this.http.post<CustomerForm>(`${this.baseurl}/customer`,user)
  }

  //get data of perticular id
  getCustomerById(id:string):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseurl}/customer/${id}`)
  }

  //editCustomer
  editCustomer(user:CustomerForm,id:string):Observable<CustomerForm>{
    return this.http.put<CustomerForm>(`${this.baseurl}/customer/${id}`,user)
  }

  //get customer categories
  getCustomerCatgeroies():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseurl}/category`)
  }

}
