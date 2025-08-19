import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { VehiclesComponent } from './store/vehicles.component';
import { IntroComponent } from './store/intro.component';
import { SignUpComponent } from './store/signup.component';
import { SignInComponent } from './store/signin.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: 'intro', component: IntroComponent },
      { path: 'vehicle', component: VehiclesComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'signin', component: SignInComponent },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      { path: '**', redirectTo: '/intro' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
