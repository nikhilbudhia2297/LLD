import {Vehicle} from "./Vehicle";
import {VehicleType} from "./VehicleType";

export class TwoWheelerVehicle implements Vehicle{
    vehicleNo: string;
    vehicleType: VehicleType;

    constructor(no : string) {
        this.vehicleType = VehicleType.TWO_WHEELER;
        this.vehicleNo = no;
    }

}