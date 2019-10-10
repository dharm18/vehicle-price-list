import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  public myForm: FormGroup; 
  submitted = false;

  constructor(private vehicleService: VehicleService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.newVehicle();  
  }

  newVehicle() {
    this.submitted = false;
    this.myForm = this._fb.group({
      makeName: ['', [Validators.required, Validators.minLength(5)]],
      modelName: [''],
      modelEdition: [''],
      listPrice: [''],
      vehicleOptions: this._fb.array([
          this.initVehicleOptions(),
      ])
    });
  } 

  initVehicleOptions() {
    return this._fb.group({
        name: ['', Validators.required],
        price: ['']
    });
  }
  addVehicleOptions() {
    const control = <FormArray>this.myForm.controls['vehicleOptions'];
    control.push(this.initVehicleOptions());
  }

  removeVehicleOptions(i: number) {
      const control = <FormArray>this.myForm.controls['vehicleOptions'];
      control.removeAt(i);
  }

  save(model: Vehicle) {
    
    console.log(this.myForm.value);
    this.submitted = true;

    this.vehicleService.createVehicle(this.myForm.value)
      .subscribe(data => console.log(data), error => console.log(error));

    console.log(model);
    this.newVehicle();  

  }

}
