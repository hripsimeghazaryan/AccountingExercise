import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountIdTableComponent } from './account-id-table/account-id-table.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsTableComponent },
  { path: 'accounts/:id', component: AccountIdTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }