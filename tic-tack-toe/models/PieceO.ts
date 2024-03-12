import {Piece} from "./Piece";
import {PieceType} from "./PieceType";

export class PieceO extends Piece{
    constructor() {
        super(PieceType.O);
    }
}