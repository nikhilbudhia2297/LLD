class Singleton{
    static instance : Singleton

    private constructor() {
        if(Singleton.instance){
            Singleton.instance = new Singleton();
        }
    }

    static print(){
        console.log("Singleton test")
    }
}

function testSingleton(){
    Singleton.print();
}

testSingleton();