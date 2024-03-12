import {EntryGate} from "./EntryGate";
import {ParkingSpot} from "../parking_spot/ParkingSpot";
import {Vehicle} from "../vehicle/Vehicle";
import {VehicleType} from "../vehicle/VehicleType";
import {Receipt} from "../Receipt";

export class PrimaryEntryGate implements EntryGate{
    assignSpot(parkingSpot: ParkingSpot, vehicle: Vehicle): void {

    }

    findSpot(vehicleType: VehicleType): ParkingSpot | null {
        return null;
    }

    generateReceipt(parkingSpot: ParkingSpot, vehicle: Vehicle): Receipt {
        return new Receipt(vehicle, parkingSpot);
    }

}