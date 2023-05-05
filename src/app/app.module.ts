import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NamePipe } from './pipes/name.pipe';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { FirstnamePipe } from './pipes/firstname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    CreateCustomerComponent,
    NamePipe,
    CreateItemComponent,
    ItemDetailComponent,
    UpdateItemComponent,
    CustomerOverviewComponent,
    FirstnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
