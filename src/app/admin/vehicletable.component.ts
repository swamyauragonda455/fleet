import { Component } from '@angular/core';

import { VehicleRepository } from '../model/vehicle.repository';
import { Vehicle } from '../model/vehicle.model';

@Component({
  selector: 'vehicleTableComponent',
  templateUrl: 'vehicleTable.component.html',
})
export class VehicleTableComponent {
  constructor(private repository: VehicleRepository) {}

  getVehicles(): Vehicle[] {
    return this.repository.getVehicles();
  }

  deleteProduct(id?: number) {
    // 1
    this.repository.deleteVehicle(id);
  }
}
