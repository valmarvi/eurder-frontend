import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'nameFilter'
})
export class PipesPipe implements PipeTransform {

  transform(items: Item[], searchText: string): any[] {
    searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
