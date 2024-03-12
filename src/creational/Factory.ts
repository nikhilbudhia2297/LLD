interface Animal{
    getSound() : string;
}

class Dog implements Animal{
    getSound(): string {
        return "BARK";
    }
}

class Cat implements Animal{
    getSound(): string {
        return "MEOW";
    }
}

class AnimalFactory{
    static getAnimal(type : string){
        switch (type){
            case "DOG" : return new Dog();
            case "CAT" : return new Cat();
        }
        throw new Error('INVALID');
    }
}

function testFactory(){
    let animal = AnimalFactory.getAnimal('DOG')
    animal.getSound()
}

testFactory();