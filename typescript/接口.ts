// 用来描述对象形状的 interface
// 接口一方面可以在面向对象编程中表示为行为抽象，另外可以用来描述对象的形状
// 接口就是把一些类中共有的属性和方法抽象出来，可以用来约束实现此接口的类
//一个类可以继承另一个类并实现多接口
//接口像插件一样是用来增强类的，而抽象类是具体类的抽象概念
// 一个类可以实现多个接口，一个接口也可以被多个类实现，但一个类可以有多个子类，但只能有一个父类

// 同名的接口可以写多个，类型会自动合并

interface Iitem  {
    readonly price: number,
    itemName: string,
    sku?: object[]
}

let item:Iitem = {
    price: 10,
    itemName: '榴莲',
    sku: [
        {
            skuId: 111
        },
    ]
}

//接口可扩展
interface IkownledgeItem extends Iitem {
    kownledgeType: number,
    [key:string]: any, // 任意类型
}

let ebook: IkownledgeItem = {
    ...item,
    kownledgeType: 6,
    a:1
}

// 类型断言
// let ebook: IkownledgeItem = ({
//     ...item,
//     kownledgeType: 6,
//     a:1
// }) as IkownledgeItem

// 类实现接口

interface Speakble {
    name: string
}
interface Speakble {
    speak():void
}

interface Eatabel {
    eat():void
}

class Person implements Speakble, Eatabel {
    name: string
    speak(): void {
        throw new Error("Method not implemented.")
    }
    eat(): void {
        throw new Error("Method not implemented.")
    }
    
}



// 接口的继承
interface Speakable1 {
    speak():void
}
interface SpeakChinese extends Speakable1 {
    speakChinese():void
}
class ChineseMan implements SpeakChinese {
    speakChinese(): void {
        throw new Error("Method not implemented.")
    }
    speak(): void {
        throw new Error("Method not implemented.")
    }
    
}

// 函数类型接口
interface Discount {
    (price:number):number
}

const discount: Discount = (price:number):number => {
    return price * 0.8
}

// 可索引接口
// 对数组和对象进行约束
interface User {
    [index:number]:string
}

let user: User = {
    0: 'a',
    1: 'b'
}
let arr3:User = ['a', 'b']

// 构造函数类型
class Animal {
    constructor(public name:string) {

    }
}
// 加了new之后就是用来描述类的构造函数类型
interface WithNameClass {
    new(name:string):any
}
function createAnimal (clazz: WithNameClass, name:string) {
    return new clazz(name)
}
let a = createAnimal(Animal, 'zx');
console.log(a.name)


// 表示一个函数，有个age属性
interface Type1 {
    (name:string):any,
    age: number
}


export {}





