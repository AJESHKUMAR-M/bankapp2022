import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username = '';
  acno = '';
  pass = '';

  //form groups:
  registerForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  });
  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  register() {
    var username = this.registerForm.value.username;
    var acno = this.registerForm.value.acno;
    var pass = this.registerForm.value.pass;

    if (this.registerForm.valid) {
      const result = this.ds.register(username, acno, pass);

      if (result) {
        alert('Register success');
        this.router.navigateByUrl('');
      } else {
        alert('already existing user.....please login again');
      }
    } else {
      alert('check your usernme');
    }
  }
}
