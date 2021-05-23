export namespace zoo {
    export class Dog{
        eat() {
            console.log('zoo dog')
        }
    }
}
export namespace home {
    export class Dog{
        eat() {
            console.log('home dog')
        }
    }
}

let dogOfZoo = new zoo.Dog();
dogOfZoo.eat();
let dogOfHome = new home.Dog();
dogOfHome.eat();