import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-traveler-register',
  templateUrl: './traveler-register.component.html',
  styleUrls: ['./traveler-register.component.css']
})
export class TravelerRegisterComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  registered: boolean;
  registeredEmail: string;
  errorMessage: string;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
        emailId: [this.user.emailId, [Validators.required],null],
        firstName: [this.user.firstName, [Validators.required],null],
        lastName: [this.user.lastName, [Validators.required],null],
        phoneNumber: [this.user.phoneNumber, [Validators.required],null],
        password: [this.user.password, [Validators.required],null]
    });
  }

  register()
  {
    this.user.emailId = this.loginForm.value.emailId;
    this.user.firstName = this.loginForm.value.firstName;
    this.user.lastName = this.loginForm.value.lastName;
    this.user.phoneNumber = this.loginForm.value.phoneNumber;
    this.user.password = this.loginForm.value.password;
    
    this.registerService.register(this.user).subscribe(
      (Response) => {this.registered = true;
        this.registeredEmail = Response;
      },
      error => {this.errorMessage = error;}
    )
  }
}
