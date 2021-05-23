
// 基本数据类型
const str:string = 'zx';
const num:number = 11;
const boolean:boolean = true;
const n:null = null;
const u:undefined = undefined;

// 联合类型
let age: string | number = '1';
age = 1;



// 数组
const arr: number[] = [1,2,3];
const arr1: Array<number> = [1,2,3];
// 元祖 数量和类型已知的数组
const tuple: [string, number] = ['1', 1];
console.log(tuple)


// 枚举
enum FRUIT  {
    APPLE = 'apple',
    ORANGE = 'orange',
    BANANA = 'banana'
}
console.log(FRUIT.APPLE)

// any
const arrAny: any = [{}, 'a', 1];


// nul undefined 是其他类型的子类型
let a:number;
a = null;
a = undefined;

// nerver 永远不，代表不会出现的值
// 一个函数不会出现返回值 类型
function error(message:string):never {
    throw new Error('报错了');
    console.log('ok')
}
function loop():never {
    while(true) {

    }
    console.log('ok')
}

// void 代表函数可以不写return, 或者可以return undefined || null
function greeting():void {
    return undefined
}


// Symbol, 独一无二的值
const s1 = Symbol('key');
const s2 = Symbol('key');
// console.log(s1 !== s2)

// 类型断言
let name1:string|number;
console.log((name1 as number).toFixed(2))

// 双重断言
console.log((name1 as any as boolean))


// 字面量类型， 可实现枚举效果
const up:'Up'='Up';
const down:'Down'='Down';
const left:'Left'='Left';
const right:'Right'='Right';

type Direction = 'Up' | 'Down' | 'Left' | 'Right'; // 类型别名
function move(direction: Direction) {
    
}
move("Left"); // 传参有提示

// 类型字面量
type Person = {
    name: string,
    age: number
}
let p1:Person = {
    name: 'zx',
    age: 1
}








// object 非原始数据类型 {} [] function
const create = (obj:object) => {

}
create({})



