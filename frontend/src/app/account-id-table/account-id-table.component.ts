import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-account-id-table',
  templateUrl: './account-id-table.component.html',
  styleUrls: ['./account-id-table.component.css']
})
export class AccountIdTableComponent implements OnInit {
  accounts: any;
  id: number | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    const requestOptions: Object = {
      responseType: 'json'
    }
    this.http.get<any>(`http://localhost:3000/accounts/${this.id}`, requestOptions).subscribe((data) => {
      this.accounts = data;
    });
  }
}
