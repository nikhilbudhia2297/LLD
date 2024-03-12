import {ParkingSpot} from "./ParkingSpot";
import {VehicleType} from "../vehicle/VehicleType";
import {TariffType} from "./TariffType";

export class FourWheelerParkingSpot extends ParkingSpot{

    constructor() {
        super(VehicleType.FOUR_WHEELER, TariffType.HOURLY, 50);
    }
}