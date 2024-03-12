export class User{
    private readonly id : string
    private readonly name : string
    private readonly email : string
    private readonly mobile : string

    constructor(id : string, name : string, email : string, mobile : string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    geId(){
        return this.id;
    }

    getName(){
       return this.name;
    }

    getEmail(){
        return this.email;
    }

    getMobile(){
        return this.mobile
    }
}