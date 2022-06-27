import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormgroup!: FormGroup;

  constructor(private fb : FormBuilder,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.newCustomerFormgroup=this.fb.group(
      {
        name: this.fb.control(null,[Validators.required]),
        email: this.fb.control(null,[Validators.email,Validators.required]),

      }
    );
  }

  handleSaveCustomer() {
let customer:Customer=this.newCustomerFormgroup.value;
this.customerService.saveCustomer(customer).subscribe(
  {
  next: data=>{
    alert("customer saved");
  }  ,
    error: err=>{
    console.log(err);
    }
  }
);
  }
}
