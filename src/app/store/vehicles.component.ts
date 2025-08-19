import { Component } from '@angular/core';
import { VehicleRepository } from '../model/vehicle.repository';
import { Vehicle } from '../model/vehicle.model';

@Component({
  selector: 'vehicle-store',
  templateUrl: 'vehicles.component.html',
})
export class VehiclesComponent {
  available = true;
  public vehiclesPerPage: number = 3;
  public selectedPage: number = 1;
  public selectedCategory?: string | undefined;
  constructor(private repository: VehicleRepository) {}

  get vehicles() {
    let pageIndex = (this.selectedPage - 1) * this.vehiclesPerPage;
    return this.repository
      .getVehicles(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.vehiclesPerPage);
  }
  // get categories() {
  //   return this.repository.getCategories();
  // }
  changeCategory(cat?: string | undefined) {
    this.selectedCategory = cat;

    this.changePage(1);
    return;
  }
  changePage(newsize: any) {
    this.selectedPage = newsize;
  }
  changePageSize(size: any) {
    this.vehiclesPerPage = Number(size.value);
    this.changePage(1);
  }
  get PageNumber(): number[] {
    const totalVehicles = this.repository.getVehicles(
      this.selectedCategory
    ).length;
    const pages = Math.ceil(totalVehicles / this.vehiclesPerPage);

    return Array(pages)
      .fill(0)
      .map((x, i) => i + 1);
  }
  addToBasket(item: Vehicle) {
    // Logic to add the selected vehicle to the basket
  }
}
