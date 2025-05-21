import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() produit: any;
  
  ngOnInit(): void {
    if (this.produit) {
      this.produit.currentImage = this.produit.image;
    }
  }

  newPrice(produit: any): number {
    let prix = produit.prix;
    if (produit.promo !== 0) {
      prix = produit.prix - ((produit.prix * produit.promo) / 100);
    }
    return prix;
  }

  changeImage(produit: any, n: number): void {
    if (n === 1 && produit.image2) {
      produit.currentImage = produit.image2;
    } else {
      produit.currentImage = produit.image;
    }
  }
}
