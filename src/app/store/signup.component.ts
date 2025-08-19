import { user } from './../model/user.model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleRepository } from '../model/vehicle.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: 'signup.component.html',
})
export class SignUpComponent {
  submitted = false;
  constructor(
    public users: user,
    private repository: VehicleRepository,
    private router: Router
  ) {}
  addUser(fg: NgForm) {
    this.submitted = true;
    if (this.submitted) {
      this.router.navigateByUrl('/signin');
    }
    return this.repository.addUser(this.users);
  }
}
