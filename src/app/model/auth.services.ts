import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServices {
  constructor(private source: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.source.authenticate(username, password);
  }
}
