import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../accounts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})

export class AccountsTableComponent implements OnInit {
  accounts: Account[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const requestOptions: Object = {
      responseType: 'json'
    }
    this.http.get<any>(`${environment.apiUrl}/accounts`, requestOptions).subscribe((data) => {
      this.accounts = data;
    });
  }
}
