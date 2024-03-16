import {PieceColour} from "./PieceColour";
import {Cell} from "../Cell";

export class Piece{
    private readonly colour : PieceColour
    private currCell : Cell | null;

    constructor(color : PieceColour) {
        this.colour = color;
    }

    moveTo(cell : Cell){
        this.currCell = cell;
        const nextCell = this.currCell.getJump();
        if(nextCell){
            this.currCell = nextCell.end;
        }
    }

    getCurrCellValue(){
        if(this.currCell){
            return this.currCell.getValue();
        }
        return 0;
    }
}