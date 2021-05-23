
class Person {
    myName:string;
    constructor(name:string){
        this.myName = name
    }
    getName():void{
        console.log(this.myName);
    }

    // 属性存取器
    get name() {
        return this.myName
    }
    set name(value) {
        this.myName = value;
    }
}

let p1 = new Person('1');
p1.name = 'zx';
p1.getName();


// 修饰符
// public 公开属性，自己、自己的子类、其他类都能访问
// protected 自己和自己的子类能访问，其他类不能访问
// private 仅自己能访问
// readonly 只读属性
// static 静态属性, 类上的属性和方法，会被继承

// 继承

class Person2 {
    name: string;
    age:number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName():string {
        return this.name;
    }
    setName(name:string):void {
        this.name = name;
    }
}

class Student extends Person2 {
    stuNo: number;
    constructor(name:string, age:number, stuNo:number) {
        super(name, age);
        this.stuNo = stuNo;
    }
    getStuNo(){
        return this.stuNo;
    }
}

let s1 = new Student('zx', 1, 111)



// 装饰器
// 改变类的行为

function addNameEat(constructor:Function) {
    constructor.prototype.name = 'zx';
    constructor.prototype.eat = function() {}

}
@addNameEat
class Person3 {
    constructor(){}
}

let p:Person3 = new Person3();
console.log(p.name)


// 抽象类

abstract class Animal{
    name:string;
    abstract speak():void
}

class Cat extends Animal{
    speak():void {
        console.log('苗苗')
    }
}


// 类的重写, 子类重写继承自父类的方法

// 类的重载， 函数的重载
function double(val:string)
function double(val:number)
function double(val: any) {
    if(typeof val === 'number'){
       return val * 2; 
    }else if (typeof val === 'string') {
        return val + val;
    }
}

double(2)
double('2')


// 多态，同一个方法不同的子类有不同的实现



class Component {
    static myName: string = '静态类名称属性';
    myName: string = '实例名称属性'
}
// Component 类名本身表示的是实例的类型
let c:Component = new Component();
// 描述函数的类型
let c1: typeof Component = Component; // 这里的typeof 属于 ts的



export {}