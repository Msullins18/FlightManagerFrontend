import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Traveler } from '../../../shared/traveler';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  traveler: Traveler
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.traveler = new Traveler();
    this.createForm()
  }
  createForm() {

    this.loginForm = this.fb.group({
        emailID: [this.traveler.emailId, [Validators.required],null],
        password: [this.traveler.password, [Validators.required],null]
    });
  }
  login()
  {
    this.traveler.emailId = this.loginForm.value.emailID;
    this.traveler.password = this.loginForm.value.password;
    this.loginService.login(this.traveler).subscribe(
      (response) => {
        this.traveler = response
        sessionStorage.setItem("traveler", JSON.stringify(this.traveler));
        this.router.navigate(['/home']);
    }
    )
  }
}
