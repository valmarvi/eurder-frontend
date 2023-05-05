import {Component, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit{
  sendIdForm = this.formBuilder.group({
    id: ''
  });

  private _item!: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {}

  get item() {
    return this._item;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.itemService
      .findById(id)
      .subscribe(item => this._item = item);
  }
}
