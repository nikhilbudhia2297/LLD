import {Piece} from "./Piece";

export class Board{
    size : number
    grid : Piece[][] | null[][]

    constructor(size : number) {
        this.size = size;
        for(let i = 0;i<size;i++){
            for(let j = 0; j<size;j++){
                this.grid[i][j] = null;
            }
        }
    }

    addPiece(x : number, y : number, piece : Piece){
        if(!x || !y){
            return false;
        }
        this.grid[x][y] = piece;
        return true;
    }

    printBoard(){

    }
}