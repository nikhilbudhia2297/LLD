import {Cell} from "./Cell";

export class Board{
    private readonly length : number
    private readonly breadth : number
    private cells : Cell[];

    constructor(length : number, breadth : number) {
        this.length = length;
        this.breadth = breadth;
        this.cells = [];
        this.addCells();
    }

    addCells(){
        const totalCells = this.length * this.breadth;
        for(let value=1; value<=totalCells ; value++){
            this.cells.push(new Cell(value));
        }
    }

    getEnd(){
        return this.length * this.breadth;
    }
}