import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

export const routes: Routes = [
  { path: 'products', component: ProductComponent, title: 'Products' },
  { path: 'product-add-1', component: ProductAddForms1Component, title: 'Product Add',canActivate:[LoginGuard] },
  { path: 'product-add-2', component: ProductAddForms2Component, title: 'Product Add' },
  {path: 'category',component: CategoryComponent,title: 'Categories'},
  {path: 'login',component: LoginComponent,title: 'Login'},
  {path:"products/category/:categoryId",component:ProductComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full', title: 'Shop' },
];
