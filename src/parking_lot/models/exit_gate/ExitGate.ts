import {ParkingSpot} from "../parking_spot/ParkingSpot";
import {Receipt} from "../Receipt";
import {Bill} from "../bill/Bill";

export interface ExitGate{
    freeSpot(spot : ParkingSpot) : void;
    generateBill(receipt : Receipt) : Bill;
}