import {JumpInterface} from "./jump/JumpInterface";

export class Cell{
    private value : number;
    private jump : JumpInterface |null;

    constructor(value : number) {
        this.value = value;
        this.jump = null;
    }

    getValue(){
        return this.value;
    }

    addJump(jump : JumpInterface){
        this.jump = jump;
    }

    getJump(){
        return this.jump;
    }
}