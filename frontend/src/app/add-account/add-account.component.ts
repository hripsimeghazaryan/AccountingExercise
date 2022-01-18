import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../accounts';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  showModal: boolean;

  @Output() newAccount: EventEmitter<any> = new EventEmitter();
  
  account = new FormGroup({
    accountId: new FormControl('', Validators.required),
    createdAt: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    published: new FormControl(''),
    revenue: new FormControl(''),
    spend: new FormControl(''),
    title: new FormControl(''),
    updatedAt: new FormControl(''),
    views: new FormControl('')
  })

  get accountId() { return this.account.get('accountId'); }

  get createdAt() { return this.account.get('createdAt'); }

  get id() { return this.account.get('id'); }

  get owner() { return this.account.get('owner'); }

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.http.post(`${environment.apiUrl}/accounts`, <Account> this.account.value).subscribe(
      (response) => {
        this.newAccount.emit(response)
        this.showModal = false;
        this.account.reset();
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
