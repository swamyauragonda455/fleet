import { Component } from '@angular/core';
import { VehicleRepository } from '../model/vehicle.repository';
import { user } from '../model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: 'signin.component.html',
})
export class SignInComponent {
  constructor(private repository: VehicleRepository, public users: user) {}
  checkUser(fg: NgForm): any {
    if (fg.valid) {
      return this.repository.checkUser(this.users);
    }
  }
}
