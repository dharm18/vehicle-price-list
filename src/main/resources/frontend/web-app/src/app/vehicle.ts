export class Vehicle {
    id : number;
    makeName : string;
    modelName : string;
    modelEdition : string;
    listPrice : number;
    vehicleOptions: VehicleOption[];
}

export class VehicleOption {
    id: number;
    name: string;
	price: number;
}