import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Admin } from 'src/app/shared/admin';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  loginForm: FormGroup;
  admin: Admin;
  registered: boolean;
  registeredEmail: string;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.admin = new Admin();
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
        emailId: [this.admin.emailId, [Validators.required],null],
        firstName: [this.admin.firstName, [Validators.required],null],
        lastName: [this.admin.lastName, [Validators.required],null],
        phoneNumber: [this.admin.phoneNumber, [Validators.required],null],
        password: [this.admin.password, [Validators.required],null]
    });
  }

  register()
  {
    this.admin.emailId = this.loginForm.value.emailId;
    this.admin.firstName = this.loginForm.value.firstName;
    this.admin.lastName = this.loginForm.value.lastName;
    this.admin.phoneNumber = this.loginForm.value.phoneNumber;
    this.admin.password = this.loginForm.value.password;
    
    this.registerService.register(this.admin).subscribe(
      (Response) => {this.registered = true;
        this.registeredEmail = Response;
      }
    )
  }
}
