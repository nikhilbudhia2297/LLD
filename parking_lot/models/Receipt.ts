import {Vehicle} from "./vehicle/Vehicle";
import {ParkingSpot} from "./parking_spot/ParkingSpot";

export class Receipt{
    private readonly vehicle : Vehicle;
    private readonly spot : ParkingSpot;
    private readonly entryTime : Date;

    constructor(vehicle : Vehicle, spot : ParkingSpot) {
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = new Date();
    }

    getSpot(){
        return this.spot;
    }

    getEntryTime(){
        return this.entryTime;
    }

    getVehicle(){
        return this.vehicle;
    }
}