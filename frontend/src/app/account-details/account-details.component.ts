import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../accounts';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})

export class AccountDetailsComponent implements OnInit {
  accounts: Account[];
  id: number | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    const requestOptions: Object = {
      responseType: 'json'
    }
    this.http.get<any>(`${environment.apiUrl}/accounts/${this.id}`, requestOptions).subscribe((data) => {
      this.accounts = data;
    });
  }
}
