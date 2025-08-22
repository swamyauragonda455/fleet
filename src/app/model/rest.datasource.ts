import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';
import { Vehicle } from './vehicle.model';
import { user } from './user.model';
import { Booking } from './booking.model';

const PROTOCOL = 'http';
const PORT = '3500';
const PORT_M = '4301';

@Injectable()
export class RestDataSource {
  baseUrl?: string;
  auth_token?: string;
  // baseUrl_m?: string = 'http://localhost:4301/';
  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    // this.baseUrl_m = `${PROTOCOL}://${location.hostname}:${PORT_M}/`;
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
  addUser(users: user): Observable<user> {
    return this.http.post<user>(this.baseUrl + 'users', users);
  }
  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl + 'users');
  }
  saveBooking(booking: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'bookings', booking);
  }
  getBooking(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'bookings');
  }
  deleteVehicle(id?: number): Observable<Vehicle> {
    return this.http.delete<Vehicle>(
      `${this.baseUrl}vehicles/${id}`,
      this.getOptions()
    );
  }
  saveVehicle(newvehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(
      this.baseUrl + 'vehicles',
      newvehicle,
      this.getOptions()
    );
  }
  updateBooking(booking: Booking): Observable<Booking> {
    console.log('hello from rest');
    return this.http.put<Booking>(
      `${this.baseUrl}bookings/${booking.Id}`,
      booking,
      this.getOptions()
    );
  }
  deleteBooking(id?: number): Observable<Booking> {
    return this.http.delete<Booking>(
      `${this.baseUrl}bookings/${id}`,
      this.getOptions()
    );
  }
  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
