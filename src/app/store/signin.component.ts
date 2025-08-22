import { UserRepository } from './../model/user.repository';
import { Component } from '@angular/core';

import { user } from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: 'signin.component.html',
})
export class SignInComponent {
  public users: user = new user();
  errorMessage?: string;
  showPassword: boolean = false;
  constructor(
    private repository: UserRepository,

    private router: Router
  ) {}
  checkUser(fg: NgForm): any {
    if (fg.valid) {
      return this.repository.checkUser(this.users).subscribe({
        next: (res: boolean) => {
          console.log(res);
          if (res) {
            this.router.navigateByUrl('/vehicle');
          } else {
            this.errorMessage = 'Invalid email or password';
            fg.resetForm();
          }
        },
        error: () => {
          this.errorMessage = 'An error occurred. Please try again.';
          fg.resetForm();
        },
      });
    }
  }
}
