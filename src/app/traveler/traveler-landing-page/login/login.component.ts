import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Traveler } from '../../../shared/traveler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  traveler: Traveler
  constructor(private fb: FormBuilder,) { }

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
    this.traveler = this.loginForm.value as Traveler;
    console.log(this.traveler.emailId);
  }
}
