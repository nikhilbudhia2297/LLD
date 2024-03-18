import {User} from "../entities/User";

export class UserController{
    private userList : User[] = [];

    constructor() {
    }

    addUser(user : User){
        this.userList.push(user);
    }

    getAllUserList(){
        return this.userList;
    }
}