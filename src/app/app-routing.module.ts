import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {UpdateItemComponent} from "./update-item/update-item.component";
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";

const routes: Routes = [{path:'', component: ItemOverviewComponent},
  {path:'create-customer', component: CreateCustomerComponent},
  {path:'create-item', component: CreateItemComponent},
  {path:'item-detail/:id', component: ItemDetailComponent},
  {path:'update-item/:id', component: UpdateItemComponent},
  {path:'customer-overview', component: CustomerOverviewComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
