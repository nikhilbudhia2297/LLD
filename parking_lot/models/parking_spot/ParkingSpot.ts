import {Vehicle} from "../vehicle/Vehicle";
import {VehicleType} from "../vehicle/VehicleType";
import {TariffType} from "./TariffType";
import {ParkingSpotId} from "./ParkingSpotId";

export abstract class ParkingSpot{
    private readonly id : number;
    private isAvailable : boolean;
    private vehicle : Vehicle | null;
    private readonly parkingType : VehicleType;
    private readonly tariffType : TariffType;
    private tariff : number

    protected constructor(parkingType : VehicleType, tariffType : TariffType, tariff : number) {
        this.id = ParkingSpotId.getParkingSpotId();
        this.isAvailable = true;
        this.parkingType = parkingType;
        this.tariffType = tariffType;
        this.tariff = tariff;
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

    getBillAmount(time : number){ // in seconds
        switch (this.tariffType){
            case TariffType.HOURLY:
                return this.tariff * Math.ceil(time/3600);
            case TariffType.PER_MINUTE :
                return this.tariff * Math.ceil(time/60);
            default : throw new Error('INVALID');
        }
    }

    setVehicle(vehicle : Vehicle){
        this.vehicle = vehicle;
        this.isAvailable = false;
    }

    removeVehicle(){
        this.vehicle = null;
        this.isAvailable = true;
    }

    updateTariff(newTariff : number){
        this.tariff = newTariff;
    }

}