

// 通过一些关键字typeof instanceof for in 来缩小范围
function double(input:string|number) {
    if (typeof input === 'string') {
        console.log(input);
    }else if (typeof input === 'number') {
        console.log(input)
    }
}

class Animal {

}

class Bird extends Animal {

}
class Dog extends Animal{}

function getName(animal: Animal) {
    if (animal instanceof Bird) {
        console.log(animal)
    } else if (animal instanceof Dog) {
        console.log(animal)
    }
}


// null 保护
function getFirstLetter(s:string|null) {
    if (s === null) {
        return ''
    }
    return s.charAt(0)
}



// 链判断运算符
let a = { b: 2};
let result = a?.b; // 原理 a===null?undefined:a.b
console.log(result)



//可辩识的联合类型
interface WainingButton {
    class:'warning',
    text1:'修改'
}
interface DangerButton {
    class:'danger',
    text1: '删除'
}

type Button = WainingButton | DangerButton;

function getButton (button: Button) {
    if (button.class === 'warning') {
        console.log(button)
    }
    if (button.class === 'danger') {
        console.log(button)
    }
}


// in 类型保护
interface Bird {
    swing: number
}
interface Dog {
    leg: number
}
function getNumber(x:Bird|Dog) {
    if('swing' in x) {
        console.log(x)
    } else {
        console.log(x)
    }
}




// 自定义类型保护 ！！
interface Bird1 {
    leg: number
}
interface Dog1 {
    leg: number
}

// 类型谓词 is 操作符， parameterName is Type, 哪个参数是什么类型
function isBird(x:Bird1|Dog1):x is Bird1{
    return x.leg === 2
}

function getAnimal(x: Bird1 | Dog1 ){
    if(isBird(x)) {
        console.log(x)
    } else {
        console.log(x)
    }
}


// unknown类型, 未知的类型，和any一样也是顶级类型


// 交叉类型, 并不是并集也不是交集，要以子类型去理解
interface A{name:string}
interface B{age:number}
type C = A&B;   // C类型继能满足A类型又能满足B类型
let c:C = {name:'zx', age:10}


// keyof 拿到所有的key










export {}