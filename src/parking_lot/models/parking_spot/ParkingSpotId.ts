export class ParkingSpotId{
    private static nextParkingSpotId : number;

    private constructor() {
    }

    static getParkingSpotId(){
        if(!ParkingSpotId.nextParkingSpotId){
            ParkingSpotId.nextParkingSpotId = 0;
        }else{
            ParkingSpotId.nextParkingSpotId += 1;
        }
        return ParkingSpotId.nextParkingSpotId;
    }
}