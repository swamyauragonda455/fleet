import { Vehicle } from './../model/vehicle.model';
import { Component } from '@angular/core';
import { Booking } from '../model/booking.model';
import { BookingRepository } from '../model/booking.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'basket',
  templateUrl: 'basket.component.html',
})
export class BasketComponent {
  public basket: Booking = new Booking();
  errorMessage: string | undefined = undefined;
  bookingMessage: string | undefined = undefined;

  constructor(
    private bookingRepository: BookingRepository,
    private router: Router
  ) {
    const nav = this.router.getCurrentNavigation();
    this.basket = nav?.extras.state?.['vehicle'];
  }
  submitBasket(basketForm: any) {
    if (basketForm.valid) {
      this.bookingRepository.saveBooking(this.basket).subscribe({
        next: (res) => {
          console.log('Booking saved successfully', res);
          this.bookingMessage = 'Booking saved successfully!';
          basketForm.resetForm();
        },
        error: (err) => {
          this.errorMessage = 'Failed to save booking. Please try again.';
        },
      });
    }
  }
  onAlertClose() {
    this.bookingMessage = undefined;
    this.router.navigateByUrl('/vehicle');
  }
}
