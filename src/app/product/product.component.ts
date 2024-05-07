import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { LoginGuard } from '../login/login.guard';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  imports: [CommonModule,RouterLink,CategoryComponent, ProductFilterPipe,FormsModule],
  providers:[ProductService,AccountService,LoginGuard]
})
export class ProductComponent implements OnInit {
filterText=""
  products!: Product[];
  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products= data;
      });
    })
  }

  addToCart(product: Product): void {
    this.alertifyService.dialog(product);
  }
}
