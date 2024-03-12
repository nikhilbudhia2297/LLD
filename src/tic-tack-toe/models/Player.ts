import {Piece} from "./Piece";

export class Player {
    private name : string
    private piece : Piece

    constructor(name : string, piece : Piece) {
        this.name = name;
        this.piece = piece;
    }
}