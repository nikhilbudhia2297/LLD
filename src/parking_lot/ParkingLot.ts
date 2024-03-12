import {ParkingSpot} from "./models/parking_spot/ParkingSpot";
import {EntryGate} from "./models/entry_gate/EntryGate";
import {ExitGate} from "./models/exit_gate/ExitGate";

export class ParkingLot{
    parkingSpots : ParkingSpot[];
    primaryEntryGate : EntryGate;
    primaryExitGate : ExitGate;

    constructor() {
        this.createParkingSpot();
    }

    private createParkingSpot(){

    }
}