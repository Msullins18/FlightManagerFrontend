import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  private token: String;
  errorMessage: string;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.createForm()
  }
  createForm() {

    this.loginForm = this.fb.group({
        emailID: [this.user.emailId, [Validators.required],null],
        password: [this.user.password, [Validators.required],null]
    });
  }
  login()
  {
    this.user.emailId = this.loginForm.value.emailID;
    this.user.password = this.loginForm.value.password;
    this.user.userType = "TRAVELER";
    this.loginService.login(this.user).subscribe(
      (response) => {
        this.token = response
        console.log(this.token);
        sessionStorage.setItem("token", JSON.stringify(this.token));
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['/home']);
    },
    error => {this.errorMessage = error;}
    )
  }
}
