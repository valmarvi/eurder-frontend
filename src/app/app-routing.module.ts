import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";

const routes: Routes = [{path:'', component: ItemOverviewComponent},
  {path:'create-customer', component: CreateCustomerComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
