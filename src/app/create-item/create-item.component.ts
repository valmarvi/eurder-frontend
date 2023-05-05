import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  createItemForm: FormGroup = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: ''
  });

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {}

  onSubmit() {
    this.itemService.addItem(this.createItemForm.value).subscribe(data => {
      console.log('message::::', data);
      this.createItemForm.reset();
    });
  }
}
