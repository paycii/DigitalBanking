import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Customer} from "../model/customer.model";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  backenhost:string="http://localhost:8082";
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers");
  }
  public searchCustomers(keyword:string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomer(customer:Customer):Observable<Customer>{
  return this.http.post<Customer>(environment.backendHost+"/customers",customer);
  }
  public DeleteCustomer(id:number){
    return this.http.delete(environment.backendHost+"/customers/"+id);
  }
}
