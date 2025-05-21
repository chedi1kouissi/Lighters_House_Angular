import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'], 
})
export class ProductAddComponent {
  productAddForm = new FormGroup({
    nameControl: new FormControl(''),
    priceControl: new FormControl(''),
    qteControl: new FormControl(''),
    descControl: new FormControl(''),
    img1Control: new FormControl(''),
    img2Control: new FormControl(''),
    categControl: new FormControl(''),
  });

  onAddProduct() {
    alert("bonjour"); 
  }
}
