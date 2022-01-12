import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})

export class AccountsTableComponent implements OnInit {
  accounts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const requestOptions: Object = {
      responseType: 'json'
    }
    this.http.get<any>('http://localhost:3000/accounts', requestOptions).subscribe((data) => {
      this.accounts = data;
    });
  }
}
