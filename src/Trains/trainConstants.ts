export class PeakHours{
    private readonly hours = [
        {
            start : 8.00,
            end : 10.00
        },
        {
            start : 16.30,
            end : 19.00
        }
    ]

    static withinPeakHours(currTime : Date) : boolean{
        // TODO
        if(currTime ){
            return true;
        }
        return false;
    }
}

export const TRANSFER_FEE = 2;

export class Fares{
    private readonly fares = [
        {
            from : 'Green',
            to : 'Green',
            peak : 2,
            non_peak : 1
        },
        {
            from : 'Red',
            to : 'Red',
            peak : 3,
            non_peak : 2
        },
        {
            from : 'Green',
            to : 'Red',
            peak : 4,
            non_peak : 3
        },
        {
            from: 'Red',
            to: 'Green',
            peak: 3,
            non_peak: 2
        }
    ];

    getFare(from : string, to : string, isPeak : boolean){
        this.fares.map((x) => {
            if(x.from == from && x.to==to){
                return isPeak ? x.peak : x.non_peak;
            }
        })
    }
}

export class FareCap{
    private cap = [
        {
            from : '',
            to : '',
            daily : 8,
            weekly : 40
        }
    ];

    static getCap(from : string, to  : string){
        return 1;
    }
}