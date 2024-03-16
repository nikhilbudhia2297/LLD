import {Vehicle} from "../vehicle/Vehicle";
import {VehicleType} from "../vehicle/VehicleType";
import {ParkingSpotId} from "./ParkingSpotId";

export abstract class ParkingSpot{
    private readonly id : number;
    private readonly parkingType : VehicleType;
    private isAvailable : boolean;
    private vehicle : Vehicle | null;

    protected constructor(parkingType : VehicleType) {
        this.id = ParkingSpotId.getParkingSpotId();
        this.isAvailable = true;
        this.parkingType = parkingType;
    }

    getId(){
        return this.id;
    }

    getIsAvailable(){
        return this.isAvailable;
    }

    getVehicle(){
        return this.vehicle;
    }

    getParkingType(){
        return this.parkingType;
    }

    setVehicle(vehicle : Vehicle){
        this.vehicle = vehicle;
        this.isAvailable = false;
    }

    removeVehicle(){
        this.vehicle = null;
        this.isAvailable = true;
    }

}