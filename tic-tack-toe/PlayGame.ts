import {Player} from "./models/Player";
import {TickTackToeGame} from "./TickTackToeGame";
import {PieceX} from "./models/PieceX";
import {PieceO} from "./models/PieceO";

class PlayGame{

    static play(){
        const game : TickTackToeGame = new TickTackToeGame();
        game.initiateGame(3);
        game.startGame();
    }
}