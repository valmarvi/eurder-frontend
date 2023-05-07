import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {

  createItemForm: FormGroup = this.formBuilder.group({
    name: ['',Validators.required, Validators.minLength(5)],
    description: ['',Validators.required],
    price: ['',Validators.required],
    amountOfStock: ['',Validators.required]
  });

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) {}

  onSubmit() {
    this.itemService.addItem(this.createItemForm.value).subscribe(data => {
      console.log('message::::', data);
      this.createItemForm.reset();
    });
  }
}
