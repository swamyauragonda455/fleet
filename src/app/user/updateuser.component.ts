import { Component } from '@angular/core';
import { UserRepository } from '../model/user.repository';

@Component({
  selector: 'update-user',
  templateUrl: 'updateuser.component.html',
})
export class updateUserComponent {
  constructor(private users: UserRepository) {}
}
