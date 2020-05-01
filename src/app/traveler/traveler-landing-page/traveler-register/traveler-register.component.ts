import { Component, OnInit } from '@angular/core';
import { Traveler } from 'src/app/shared/traveler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-traveler-register',
  templateUrl: './traveler-register.component.html',
  styleUrls: ['./traveler-register.component.css']
})
export class TravelerRegisterComponent implements OnInit {
  loginForm: FormGroup;
  traveler: Traveler;
  registered: boolean;
  registeredEmail: string;
  errorMessage: string;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.traveler = new Traveler();
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
        emailId: [this.traveler.emailId, [Validators.required],null],
        firstName: [this.traveler.firstName, [Validators.required],null],
        lastName: [this.traveler.lastName, [Validators.required],null],
        phoneNumber: [this.traveler.phoneNumber, [Validators.required],null],
        password: [this.traveler.password, [Validators.required],null]
    });
  }

  register()
  {
    this.traveler.emailId = this.loginForm.value.emailId;
    this.traveler.firstName = this.loginForm.value.firstName;
    this.traveler.lastName = this.loginForm.value.lastName;
    this.traveler.phoneNumber = this.loginForm.value.phoneNumber;
    this.traveler.password = this.loginForm.value.password;
    
    this.registerService.register(this.traveler).subscribe(
      (Response) => {this.registered = true;
        this.registeredEmail = Response;
      },
      error => {this.errorMessage = error;}
    )
  }
}
