import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemOverviewComponent } from '../item-overview/item-overview.component';
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class LayoutModule { }
