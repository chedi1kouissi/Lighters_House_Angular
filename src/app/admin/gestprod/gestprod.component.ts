import { Component } from '@angular/core';
import { ProductAddComponent } from "../product-add/product-add.component";

@Component({
  selector: 'app-gestprod',
  standalone: true,
  imports: [ProductAddComponent],
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css']
})
export class GestprodComponent {

}
