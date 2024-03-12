import {ParkingSpot} from "./ParkingSpot";
import {VehicleType} from "../vehicle/VehicleType";
import {TariffType} from "./TariffType";

export class TwoWheelerParkingSpot extends ParkingSpot{
    constructor() {
        super(VehicleType.TWO_WHEELER, TariffType.PER_MINUTE, 1);
    }
}