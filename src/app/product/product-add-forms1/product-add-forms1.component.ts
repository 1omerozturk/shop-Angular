import { AlertifyService } from './../../services/alertify.service';
import { CategoryService } from './../../services/category.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from '../../category/category';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { LoginGuard } from '../../login/login.guard';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-product-add-forms1',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CommonModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './product-add-forms1.component.html',
  styleUrl: './product-add-forms1.component.css',
  providers: [CategoryService, ProductService, AccountService, LoginGuard],
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}
  model: Product = new Product();
  categories!: Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe((data) => {
      this.alertifyService.successToAddProduct(data);
    });
  }
}
