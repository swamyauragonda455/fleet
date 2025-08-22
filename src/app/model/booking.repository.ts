import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.model';

@Injectable()
export class BookingRepository {
  private bookings: Booking[] = [];
  private loaded: boolean = false;
  constructor(private source: RestDataSource) {}
  saveBooking(booking: Booking) {
    return this.source.saveBooking(booking);
  }
  loadOrders() {
    this.loaded = true;
    this.source.getBooking().subscribe((rawBookings: any[]) => {
      this.bookings = rawBookings.map((raw) => this.transformToBooking(raw));
    });
  }
  private transformToBooking(raw: any): Booking {
    const vehicle = new Vehicle();
    vehicle.id = raw.id;
    vehicle.vehicleNo = raw.vehicleNo;
    vehicle.status = raw.status;
    vehicle.model = raw.model;
    vehicle.seater = raw.seater;
    vehicle.category = raw.category;

    return {
      Id: raw.id,
      src: raw.src,
      dest: raw.dest,
      date: new Date(raw.date),
      purpose: raw.purpose,
      driverName: raw.driverName,
      driverPhone: Number(raw.driverPhone),
      BookingStatus: raw.BookingStatus === 'true' || raw.BookingStatus === true,

      order_vehicle: [vehicle],
    };
  }

  getBooking(): Booking[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.bookings;
  }
  updateBooking(booking: Booking) {
    console.log('hello from booking repo');
    this.source.updateBooking(booking).subscribe((booking) => {
      this.bookings.splice(
        this.bookings.findIndex((b) => b.Id == booking.Id),
        1,
        booking
      );
    });
  }
  deleteBooking(id?: number) {
    this.source.deleteBooking(id).subscribe(() => {
      this.bookings.splice(this.bookings.findIndex((b) => id == b.Id));
    });
  }
}
