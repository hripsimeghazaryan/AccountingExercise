import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../accounts';

import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  showModal: boolean;

  account = new FormGroup({
    accountId: new FormControl(''),
    createdAt: new FormControl(''),
    id: new FormControl(''),
    owner: new FormControl(''),
    published: new FormControl(''),
    revenue: new FormControl(''),
    spend: new FormControl(''),
    title: new FormControl(''),
    updatedAt: new FormControl(''),
    views: new FormControl('')
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.http.post(`${environment.apiUrl}/accounts`, this.account.value).subscribe(
      (response) => console.log(response), //stex stanuma full datan
      (error) => console.log(error)
    );
    this.showModal = false;
  }
}
