import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { VehiclesComponent } from './store/vehicles.component';
import { IntroComponent } from './store/intro.component';
import { SignUpComponent } from './store/signup.component';
import { SignInComponent } from './store/signin.component';
import { BasketComponent } from './store/basket.component';
import { StoreFirstGaurd } from './storefirstguard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './interceptor/httpinterceptor-service';
import { ProfileComponent } from './user/profile.component';
import { UserModule } from './user/user.module';
import { ShowBookingComponent } from './user/showbooking.component';
import { updateUserComponent } from './user/updateuser.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    UserModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      {
        path: 'vehicle',
        component: VehiclesComponent,
        canActivate: [StoreFirstGaurd],
      },
      {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [StoreFirstGaurd],
      },
      {
        path: 'signin',
        component: SignInComponent,
        canActivate: [StoreFirstGaurd],
      },
      {
        path: 'basket',
        component: BasketComponent,
        canActivate: [StoreFirstGaurd],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: 'showbooking', component: ShowBookingComponent },
          { path: 'edituser', component: updateUserComponent },
        ],
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      { path: '**', redirectTo: '/intro' },
    ]),
  ],
  providers: [
    StoreFirstGaurd,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
