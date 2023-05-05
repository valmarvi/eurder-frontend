import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemURL: string;

  constructor(private http: HttpClient) {
    this.itemURL = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemURL)
      .pipe(map(items => items.sort((a: Item, b: Item) => a.name.localeCompare(b.name))));
  }

  addItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.itemURL, item);
  }

  findById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.itemURL}/${id}`);
  }

  updateItem(id: string, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.itemURL}/${id}`, item);
  }
}
