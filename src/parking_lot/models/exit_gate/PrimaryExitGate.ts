// import {ExitGate} from "./ExitGate";
// import {ParkingSpot} from "../parking_spot/ParkingSpot";
// import {Bill} from "../bill/Bill";
// import {Receipt} from "../Receipt";
//
// export class PrimaryExitGate implements ExitGate{
//     freeSpot(spot: ParkingSpot): void {
//         spot.removeVehicle();
//     }
//
//     generateBill(receipt: Receipt): Bill {
//         const startTimeSeconds = receipt.getEntryTime().valueOf()/1000;
//         const endTimeSeconds = new Date().valueOf()/1000;
//     }
//
// }