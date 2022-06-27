import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers!:Observable<Array<Customer>>;
  errorMessage!:string;
  searchFormGroup : FormGroup | undefined;

  constructor(private customerSercive:CustomerService,
              private formbuilder:FormBuilder
              ) { }

  ngOnInit(): void {
    this.searchFormGroup=this.formbuilder.group(
      {
        keyword: this.formbuilder.control("")
      }
    )
  this.handleSearchCustomers();

  }

  handleSearchCustomers() {

    let kw = this.searchFormGroup?.value.keyword;
    this.customers =  this.customerSercive.searchCustomers(kw).pipe(
    catchError(err => {
      this.errorMessage=err.message;
      return throwError(err);
    })
  );
  }


  handleDeleteCustomer(c:Customer) {
this.customerSercive.DeleteCustomer(c.id).subscribe({
next : (resp)=>{
  this.handleSearchCustomers();
},
  error:err=>{
  console.log(err);
    }

});
  }
}

