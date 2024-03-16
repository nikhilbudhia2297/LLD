import {JumpInterface} from "./JumpInterface";
import {Cell} from "../Cell";

export class SnakeJump implements JumpInterface{
    end: Cell;
    start: Cell;

    constructor(start : Cell, end : Cell) {
        if (start.getValue() <= end.getValue()){
            throw new Error(`Unexpected input`);
        }
        this.start = start;
        this.end = end;
    }
}