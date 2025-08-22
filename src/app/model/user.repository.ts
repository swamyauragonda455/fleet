import { Injectable } from '@angular/core';
import { user } from './user.model';
import { RestDataSource } from './rest.datasource';
import { from, Observable, map } from 'rxjs';

@Injectable()
export class UserRepository {
  private users: user[] = [];
  constructor(private source: RestDataSource) {}
  addUser(newusers: user): Observable<user> {
    this.users.push(newusers);
    return this.source.addUser(newusers);
  }
  checkUser(n_users: user): Observable<boolean> {
    // Fetch users from backend and check credentials
    return this.source
      .getUsers()
      .pipe(
        map((users: user[]) =>
          users.some(
            (u) => u.email === n_users.email && u.password === n_users.password
          )
        )
      );
  }
}
