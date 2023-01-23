

class Animal{
    constructor(name, weight, age){
            this.name =name;
            this.weight=weight;
            this.age=age;


    }
    makeSound(){
        console.log("Steka");

    }


}
class Dog extends Animal{
    constructor(name,weight,age){
        super(name,weight,age);
    }

makeSound(){
    console.log("Haf");
}
}
class Cat extends Animal{
    constructor(name,weight,age){
        super(name,weight,age);
    }

makeSound(){
    console.log("Mnouka");
}
}

const dog = new Dog("Karel",20,11);
dog.makeSound();
console.log(dog);
const cat = new Cat ("Čedar",15,9);
cat.makeSound();
console.log(cat);
