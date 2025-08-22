import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { VehicleRepository } from './vehicle.repository';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { user } from './user.model';
import { AuthServices } from './auth.services';
import { UserRepository } from './user.repository';
import { BookingRepository } from './booking.repository';

@NgModule({
  imports: [HttpClientModule],

  providers: [
    RestDataSource,
    VehicleRepository,
    user,
    AuthServices,
    UserRepository,
    BookingRepository,
  ],
})
export class ModelModule {}
