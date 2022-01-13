import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddAccountComponent } from './add-account/add-account.component';

import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AccountsTableComponent,
    AccountDetailsComponent,
    AddAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
