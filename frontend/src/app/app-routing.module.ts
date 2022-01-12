import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsTableComponent },
  { path: 'accounts/:id', component: AccountDetailsComponent },
  { path: '**', redirectTo: 'accounts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }