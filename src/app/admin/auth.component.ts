import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from '../model/auth.services';

@Component({
  selector: 'auth-comp',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router, private auth: AuthServices) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth
        .authenticate(this.username ?? ' ', this.password ?? ' ')
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'Authentication Failed';
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
