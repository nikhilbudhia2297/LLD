import {Vehicle} from "./Vehicle";
import {VehicleType} from "./VehicleType";

export class FourWheelerVehicle implements Vehicle{
    vehicleNo: string;
    vehicleType: VehicleType;

    constructor(no : string) {
        this.vehicleType = VehicleType.FOUR_WHEELER;
        this.vehicleNo = no;
    }
}