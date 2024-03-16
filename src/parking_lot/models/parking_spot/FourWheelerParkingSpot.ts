import {ParkingSpot} from "./ParkingSpot";
import {VehicleType} from "../vehicle/VehicleType";

export class FourWheelerParkingSpot extends ParkingSpot{

    constructor() {
        super(VehicleType.FOUR_WHEELER);
    }
}