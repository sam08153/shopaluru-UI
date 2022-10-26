import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBeforeLoginComponent } from './customer/customer-page-index';


const routes: Routes = [
  { path: '', component: HomeBeforeLoginComponent, pathMatch: 'full'},
  { path: '**', component: HomeBeforeLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
