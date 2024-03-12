import {Piece} from "./Piece";
import {PieceType} from "./PieceType";

export class PieceX extends Piece{
    constructor() {
        super(PieceType.X);
    }
}