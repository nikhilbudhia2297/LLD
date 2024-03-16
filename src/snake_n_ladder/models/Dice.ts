export class Dice {
    faces : number = 6;

    rollDice() : number{
        return Math.floor(Math.random() * this.faces) + 1;
    }
}