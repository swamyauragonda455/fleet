import { Component, OnInit } from '@angular/core';

import { BookingRepository } from '../model/booking.repository';

@Component({
  selector: 'profile-comp',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent implements OnInit {
  // booking: any[] = [];
  user: any;
  constructor(private bookingRepo: BookingRepository) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('userDetails');

    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  // getBooking() {
  //   return this.bookingRepo.getBooking();
  // }
}
