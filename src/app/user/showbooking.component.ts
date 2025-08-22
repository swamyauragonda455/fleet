import { Component } from '@angular/core';
import { BookingRepository } from '../model/booking.repository';

@Component({
  selector: 'show-bookings',
  templateUrl: 'showbooking.component.html',
  styleUrls: ['showbooking.component.css'],
})
export class ShowBookingComponent {
  user: any;
  constructor(private bookingRepo: BookingRepository) {}
  ngOnInit() {
    const storedUser = localStorage.getItem('userDetails');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }
  getBooking() {
    console.log(this.bookingRepo.getBooking());
    return this.bookingRepo.getBooking();
  }
}
