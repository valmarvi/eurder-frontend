import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerURL: string;

  constructor(private http: HttpClient) {
    this.customerURL = `${environment.backendUrl}/customers`;
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerURL)
       .pipe(map(customers => customers.sort((a: Customer, b: Customer) => a.firstname.localeCompare(b.firstname))));

    // return this.http.get<Customer[]>(this.customerURL)
    //   .pipe(map(customers => {
    //     // Check if any customers have an undefined firstName property
    //     const invalidCustomers = customers.filter(c => c.firstName === undefined);
    //     if (invalidCustomers.length > 0) {
    //       console.log('Invalid customers:', invalidCustomers);
    //     }
    //
    //     // Sort the customers by their firstName property
    //     return customers.sort((a: Customer, b: Customer) => a.firstName.localeCompare(b.firstName));
    //   }));
  }
}
