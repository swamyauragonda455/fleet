import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { VehicleTableComponent } from './vehicletable.component';
import { BookedEditorComponent } from './bookedEditor.component';
import { BookingComponent } from './booking.component';

let routing = RouterModule.forChild([
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main',
    component: AdminComponent,
    children: [
      { path: 'vehicle/:x/:y', component: BookedEditorComponent }, // {x:'create',y:1}
      { path: 'vehicle/:x', component: BookedEditorComponent },
      { path: 'vehicle', component: VehicleTableComponent },
      { path: 'booking', component: BookingComponent },

      { path: '**', redirectTo: 'vehicle' },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
]);

@NgModule({
  imports: [CommonModule, routing, FormsModule],
  exports: [],
  declarations: [
    AuthComponent,
    AdminComponent,
    VehicleTableComponent,
    BookedEditorComponent,
    BookingComponent,
  ],
  providers: [],
})
export class AdminModule {}
