import { user } from './../model/user.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleRepository } from '../model/vehicle.repository';
import { Router } from '@angular/router';
import { UserRepository } from '../model/user.repository';

@Component({
  selector: 'sign-up',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
})
export class SignUpComponent {
  submitted = false;
  errorMessage?: string;
  public users: user = new user();
  constructor(private repository: UserRepository, private router: Router) {}
  addUser(fg: NgForm) {
    this.submitted = true;

    return this.repository.addUser(this.users).subscribe({
      next: () => {
        this.errorMessage = 'user registred successfully!';
        localStorage.setItem('userDetails', JSON.stringify(this.users.name));

        fg.resetForm();
      },
      error: () => {
        this.errorMessage = 'registration failed!';
      },
    });
  }
  onAlertClose() {
    if (this.errorMessage == 'user registred successfully!') {
      this.errorMessage = undefined;
      this.router.navigateByUrl('/signin');
    } else {
    }
  }
}
