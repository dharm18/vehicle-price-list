import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.vehicles = this.vehicleService.getVehicleList();
  }

  deleteVehicle(id: number) {
    this.vehicleService.deleteVehicle(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.error()
        );
  }

  vehicleDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateVehicle(id: number){
    this.router.navigate(['update', id]);
  }
}
