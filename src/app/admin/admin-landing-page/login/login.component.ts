import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  admin: Admin;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.admin = new Admin();
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
        emailID: [this.admin.emailId, [Validators.required],null],
        password: [this.admin.password, [Validators.required],null]
    });
  }
  login()
  {
    this.admin.emailId = this.loginForm.value.emailID;
    this.admin.password = this.loginForm.value.password;
    console.log(this.admin);
    this.loginService.login(this.admin).subscribe(
      (response) => {
        this.admin = response
        sessionStorage.setItem("admin", JSON.stringify(this.admin));
        this.router.navigate(['/home']);
    }
    )
  }

}
