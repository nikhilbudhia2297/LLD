import {VehicleType} from "../vehicle/VehicleType";
import {ParkingSpot} from "../parking_spot/ParkingSpot";
import {Vehicle} from "../vehicle/Vehicle";
import {Receipt} from "../Receipt";

export interface EntryGate{
    findSpot(vehicleType : VehicleType) : ParkingSpot | null;
    assignSpot(parkingSpot : ParkingSpot, vehicle : Vehicle) : void;
    generateReceipt(parkingSpot : ParkingSpot, vehicle : Vehicle) : Receipt;
}