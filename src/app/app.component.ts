import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { LoginGuard } from './login/login.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterModule,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    CommonModule,
  ],
  providers:[LoginGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop';
}
