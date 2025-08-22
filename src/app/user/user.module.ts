import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { ShowBookingComponent } from './showbooking.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { updateUserComponent } from './updateuser.component';

@NgModule({
  imports: [BrowserModule, RouterModule],
  exports: [ProfileComponent, ShowBookingComponent, updateUserComponent],
  declarations: [ProfileComponent, ShowBookingComponent, updateUserComponent],
})
export class UserModule {}
