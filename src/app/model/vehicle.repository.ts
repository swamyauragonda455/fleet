import { user } from './user.model';
import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Vehicle } from './vehicle.model';

@Injectable()
export class VehicleRepository {
  vehicle: Vehicle[] = [];
  category: string[] = [];
  users_credentials: user[] = [];
  constructor(private source: RestDataSource) {
    source.getVehicles().subscribe((data) => {
      this.vehicle = data;
      this.category = data
        .map((v) => v.category ?? 'none')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  getVehicles(cat?: string): Vehicle[] {
    return this.vehicle.filter((v) => !cat || cat == v.category);
  }

  addUser(users: user) {
    this.users_credentials.push(users);
  }

  checkUser(users: user) {
    /* if (users == null) {
      return false;
    } */
    return this.users_credentials.filter(
      (c) => c.email == users.email && c.password == users.password
    );
  }
  deleteVehicle(id?: number) {
    return this.source.deleteVehicle(id).subscribe((v) => {
      const index = this.vehicle.findIndex((p) => p.id == id);
      if (index > -1) {
        this.vehicle.splice(index, 1);
        this.vehicle = [...this.vehicle];
      }
    });
  }
  saveVehicle(newvehicle: Vehicle) {
    return this.source.saveVehicle(newvehicle).subscribe({
      next: () => {
        return 'successfully added';
      },
    });
  }
}
