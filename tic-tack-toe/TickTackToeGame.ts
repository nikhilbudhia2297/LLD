import {Player} from "./models/Player";
import {PieceType} from "./models/PieceType";
import {PieceX} from "./models/PieceX";
import {PieceO} from "./models/PieceO";
import {Board} from "./models/Board";

export class TickTackToeGame {
    private id: number;
    private size : number;
    private chanceOf : number
    private board : Board
    private players : Player[];


    initiateGame(size : number) {
        const player1 : Player = new Player("Player1", new PieceX());
        const player2 : Player = new Player("Player2", new PieceO());

        this.players.push(player1);
        this.players.push(player2);

        this.size = size;
    }

    startGame(){
        let isWinner = false;
        while (isWinner){
            // if all filled set isWinner = true;
            //take input
            //check if valid input
            //place
            // check is winner

            // change chance
        }
    }

    isGridFull(){

    }

    getInput(){

    }

    setPiece(){

    }

    changeChance(){

    }

    isWinnerFound(){

    }
}