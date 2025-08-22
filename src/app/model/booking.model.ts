import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle.model';
@Injectable()
export class Booking {
  src?: string;
  dest?: string;
  date?: Date;
  purpose?: string;
  Id?: number;
  order_vehicle?: Vehicle[];
  driverName?: string;
  driverPhone?: number;
  BookingStatus: boolean = false;
}
