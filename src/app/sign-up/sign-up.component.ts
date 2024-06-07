import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  providers: [AccountService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {}
}
