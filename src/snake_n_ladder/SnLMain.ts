import {Player} from "./models/Player";
import {Piece} from "./models/peice/Piece";
import {PieceColour} from "./models/peice/PieceColour";
import {SnLGame} from "./SnLGame";

function SnLMain(){
    const p1 = new Player(1, new Piece(PieceColour.RED));
    const p2 = new Player(2, new Piece(PieceColour.BLUE));
    const p3 = new Player(3, new Piece(PieceColour.GREEN));
    const players = [p1,p2,p3];

    const game = new SnLGame(players, 10, 10);

    game.play();

}

SnLMain();