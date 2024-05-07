import { AlertifyService } from './../../services/alertify.service';
import { Component, model, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Product } from '../product';
import { Category } from '../../category/category';

@Component({
  selector: 'app-product-add-forms2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './product-add-forms2.component.html',
  styleUrl: './product-add-forms2.component.css',
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private alertifyService:AlertifyService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  product: Product = new Product();
  categories!:Category[];
  productAddForm!: FormGroup;

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   this.categoryService.getCategories().subscribe(data=>{
    this.categories=data;
   })
  
    this.createProductAddForm();
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyService.successToAddProduct(this.product);
    })
  }
}
