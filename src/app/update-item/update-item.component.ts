import {Component, OnInit} from '@angular/core';
import {Item} from "../model/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit{

  updateItemForm: FormGroup = this.formBuilder.group({
    id: '',
    name: '',
    description: '',
    price: '',
    amountOfStock: ''
  });

  private _item!: Item;
  _id!: string;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }

  get item(): Item {
    return this._item;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this._id = id;
    this.itemService
      .findById(id)
      .subscribe(item => {
        this._item = item;
        this.updateItemForm.setValue({
          id: item['id'],
          name: item.name,
          description: item['description'],
          price: item['price'],
          amountOfStock: item['amountOfStock']
        });
      });
  }

  onSubmit() {
    console.log(this._item.id);
    this.itemService.updateItem(this._id, this.updateItemForm.value).subscribe();
  }
}
