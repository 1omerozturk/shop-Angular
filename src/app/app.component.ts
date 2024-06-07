import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { LoginGuard } from './login/login.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { NgForm } from '@angular/forms';

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
    SignUpComponent,
    LoginComponent,
    CommonModule,
  ],
  providers: [AccountService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private accountService: AccountService) {}
  title = 'shop';
  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
  logOut() {
    this.accountService.logOut();
  }
}
