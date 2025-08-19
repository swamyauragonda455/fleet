import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Vehicle } from './vehicle.model';

const PROTOCOL = 'http';
const PORT = '3500';

@Injectable()
export class RestDataSource {
  baseUrl?: string;
  auth_token?: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl + 'vehicles');
  }
  authenticate(username: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + 'login', {
        name: username,
        password: pass,
      })
      .pipe(
        map((response) => {
          this.auth_token = response.success ? response.token : null;
          return response.success;
        })
      );
  }
}
