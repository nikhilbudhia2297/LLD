import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Dice} from "./models/Dice";
import {Cell} from "./models/Cell";

export class SnLGame{
    private dice : Dice;
    private board : Board;
    private players : Player[];
    private gameEnded : boolean;

    constructor(playerList : Player[], x : number, y : number) {
        this.dice = new Dice();
        this.players = [];
        this.gameEnded = false;
        this.createGame(playerList, x, y);
    }

    private createGame(playerList : Player[], x : number, y : number){
        this.board = new Board(x, y);
        for(let player of playerList){
            this.addPlayer(player);
        }

    }

    private addPlayer(player : Player){
        this.players.push(player);
    }

    play(){
        while (!this.gameEnded){
            const currPlayer = this.players[0];
            console.log(`CHANCE of ${currPlayer.getId()}`);

            // roll dice
            const rollNumber = this.dice.rollDice();

            //check if move allowed
            const nextCellValue = currPlayer.getPiece().getCurrCellValue() + rollNumber;
            if(nextCellValue > this.board.getEnd()){
                this.changePlayer();
                continue;
            }

            // player at top moves for the roll of dice
            currPlayer.getPiece().moveTo(new Cell(nextCellValue));

            // check if winner
            if(currPlayer.getPiece().getCurrCellValue() == this.board.getEnd()){
                this.gameEnded = true;
                console.log(`WINNER IS ${currPlayer.getId()}`);
            }
            this.changePlayer();
        }
    }

    private changePlayer(){
        const player = this.players.shift()!;
        this.players.push(player);
    }
}