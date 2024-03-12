import {PieceType} from "./PieceType";

export class Piece {
    pieceType : PieceType

    constructor(pieceType : PieceType) {
        this.pieceType = pieceType;
    }
}