import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../services/account.service';
import { LoginGuard } from '../login/login.guard';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers:[CategoryService,AccountService,LoginGuard]
})
export class CategoryComponent implements OnInit {
  title = 'Category List';

  categories!: Category[];
  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data=>{
        this.categories=data;
    }))
  }
}
