import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PipesPipe } from './pipes/pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    CreateCustomerComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
