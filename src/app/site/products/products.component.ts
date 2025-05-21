import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../../shared/models/produit';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = "Liste des produits";
  produits!: Produit[];
  msg: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts(): void {
    this.produits = this.productService.getProducts();
    this.produits.forEach(produit => {
      produit.currentImage = produit.image; 
    });
  }

  showDetails(produit: any): void {
    this.msg = produit;
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
