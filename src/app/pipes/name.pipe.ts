import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'Name',
})
export class NamePipe implements PipeTransform {

  transform(items: Item[], searchText: string): Item[] {
    searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
