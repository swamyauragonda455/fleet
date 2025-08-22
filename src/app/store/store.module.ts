import { NgModule } from '@angular/core';
import { VehiclesComponent } from './vehicles.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { IntroComponent } from './intro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';
import { BasketComponent } from './basket.component';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule],
  exports: [
    IntroComponent,
    VehiclesComponent,
    SignUpComponent,
    SignInComponent,
    BasketComponent,
  ],
  declarations: [
    VehiclesComponent,
    IntroComponent,
    SignUpComponent,
    SignInComponent,
    BasketComponent,
  ],
})
export class StoreModule {}
