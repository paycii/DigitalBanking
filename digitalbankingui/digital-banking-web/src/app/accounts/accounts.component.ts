import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AccountsService} from "../services/accounts.service";
import {Observable} from "rxjs";
import {AccountDetails} from "../model/accounts.model";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  searchAccountForm!: FormGroup;
  OpForm!: FormGroup;
  currentPage: number = 0;
  pageSize: number = 5;
  accounts!: Observable<AccountDetails>;

  constructor(private fb: FormBuilder, private accountService: AccountsService) {
  }

  ngOnInit(): void {
    this.searchAccountForm = this.fb.group({
      accountIdd: this.fb.control('')

    });
    this.OpForm = this.fb.group({

      optype: this.fb.control(null),
      amount: this.fb.control(0),
      desc: this.fb.control(null),
      accountDest: this.fb.control(null)
    })
  }

  handleSearchAccount() {
    let accountId: string = this.searchAccountForm.value.accountIdd;
    this.accounts = this.accountService.getAccount(accountId, this.currentPage, this.pageSize);
  }

  gotoPage(page: number) {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOp() {
    let accountId: string = this.searchAccountForm.value.accountIdd;

    let optype = this.OpForm.value.optype;
    console.log(accountId);
    if (optype == 'DEBIT') {

      this.accountService.debit(accountId, this.OpForm.value.amount, this.OpForm.value.desc).subscribe({
        next: data => {
          alert("Succes debit");
        }
      })
    } else if (optype == 'CREDIT') {
      this.accountService.credit(accountId, this.OpForm.value.amount, this.OpForm.value.desc).subscribe({
        next: (data) => {

          alert("Sucess credit");
          this.handleSearchAccount();
        },
        error: (err) => {
          console.log(err)
        }
      })
    } else if (optype == 'TRANSFER') {
      this.accountService.transfer(accountId, this.OpForm.value.accountDest, this.OpForm.value.amount, this.OpForm.value.desc).subscribe({
        next: (data) => {

          alert("transfer credit");
          this.handleSearchAccount();
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
}
