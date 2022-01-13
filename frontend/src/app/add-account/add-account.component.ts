import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Accounts } from '../accounts';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  showModal: boolean;
  newAccount: any;

  constructor(private http: HttpClient) {
    this.newAccount = new Accounts();
  }

  ngOnInit(): void { }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.http.post(`${environment.apiUrl}/accounts`, this.newAccount).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.showModal = false;
  }

  onValueChange(item) {
    this.newAccount[item.key] = item.value
  }
}
