import {Piece} from "./peice/Piece";

export class Player{
    private readonly id : number;
    private readonly piece : Piece;

    constructor(id : number, piece : Piece) {
        this.id = id;
        this.piece = piece;
    }

    getId(){
        return this.id;
    }

    getPiece() {
        return this.piece;
    }
}