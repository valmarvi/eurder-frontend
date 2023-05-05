import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";
import {Customer} from "../model/Customer";

@Pipe({
  name: 'Firstname'
})
export class FirstnamePipe implements PipeTransform {
  transform(customers: Customer[], searchText: string): Customer[] {
    searchText.toLocaleLowerCase();

    return customers.filter(cus => {
      return cus.firstname.toLocaleLowerCase().includes(searchText);
    });
  }
}
