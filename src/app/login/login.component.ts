import { Component, NgModule, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  providers: [AccountService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  model: User = new User();
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {}

  login(form: NgForm) {
    this.accountService.login(this.model);
  }
}
