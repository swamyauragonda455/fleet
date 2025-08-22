import { VehicleRepository } from './../model/vehicle.repository';
import { Vehicle } from './../model/vehicle.model';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bookedEditorComponent',
  templateUrl: 'bookedEditor.component.html',
})
export class BookedEditorComponent {
  editing: boolean = false;
  vehicle: Vehicle = new Vehicle(); // stores info for 1st record

  constructor(
    private repository: VehicleRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    this.editing = activeRoute.snapshot.params['x'] == 'edit'; // true

    if (this.editing) {
      // true

      Object.assign(
        // ES5 method
        this.vehicle,
        repository.getVehicles(activeRoute.snapshot.params['y'])
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveVehicle(this.vehicle);
    this.router.navigateByUrl('/admin/main/vehicle');
  }
}
