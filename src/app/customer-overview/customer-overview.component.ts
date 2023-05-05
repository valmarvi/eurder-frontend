import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/Customer";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit{

  customers: Customer[] = []
  searchText: string = "";

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }
}
