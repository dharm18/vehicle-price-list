import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})

export class UpdateVehicleComponent implements OnInit {

  id: number;
  vehicle: Vehicle;
  public myForm: FormGroup;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private vehicleService: VehicleService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.vehicle = new Vehicle();

    this.id = this.route.snapshot.params['id'];
    
    this.submitted = false;
    this.myForm = this._fb.group({
      id: [''],
      makeName: ['', [Validators.required, Validators.minLength(5)]],
      modelName: [''],
      modelEdition: [''],
      listPrice: [''],
      vehicleOptions: this._fb.array([
          this.initVehicleOptions(),
      ])
    });

    this.vehicleService.getVehicle(this.id)
      .subscribe(data => {
        console.log(data)
        //this.vehicle = data;
        this.myForm.patchValue(data);
      }, error => console.log(error));
    
    //this.myForm.controls["makeName"].setValue(this.vehicle.makeName);
    
    // this.myForm.patchValue({
    //   makeName: this.vehicle.makeName,
    //   modelName: this.vehicle.modelName,
    //   modelEdition: this.vehicle.modelEdition,
    //   listPrice: this.vehicle.listPrice,
    //   //vehicleOptions: this.vehicle.vehicleOptions
    // });

    // this.vehicle.vehicleOptions.forEach(x => {
    //   (this.myForm.get('vehicleOptions') as FormArray)
    //     .push(new FormControl(x.name))
    //     //.push(new FormControl(x.price));
    // })
  }

  initVehicleOptions() {
    return this._fb.group({
        id:[''],
        name: ['', Validators.required],
        price: ['']
    });
  }

  updateVehicle() {
    this.vehicleService.updateVehicle(this.id, this.myForm.value)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
    this.gotoList();
  }

  onSubmit() {
    this.updateVehicle();    
  }

  gotoList() {
    this.router.navigate(['/vehicles']);
  }

}
