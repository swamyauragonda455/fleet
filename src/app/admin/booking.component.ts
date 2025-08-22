import { Component } from '@angular/core';

import { BookingRepository } from '../model/booking.repository';
import { Booking } from '../model/booking.model';

@Component({
  selector: 'book',
  templateUrl: 'Booking.component.html',
})
export class BookingComponent {
  status: boolean = false;
  constructor(private bookingService: BookingRepository) {}
  getBooking() {
    return this.bookingService.getBooking();
  }

  confirmBooking(booking: Booking) {
    booking.BookingStatus = true;
    this.status = true;
    return this.bookingService.updateBooking(booking);
  }

  delete(id?: number) {
    return this.bookingService.deleteBooking(id);
    console.log('heyyyy cancelled ');
  }
}
