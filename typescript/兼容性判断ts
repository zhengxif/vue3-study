import { stringifyQuery } from "vue-router";

// 接口的兼容性
interface Animal {
    name: string;
    age: number
}

interface Person {
    name: string;
    age: number;
    gender: number
}

function getName(a:Animal):string {
    return a.name;
}
let a:Animal = {
    name: '',
    age: 10
}
getName(a);

let p: Person = {
    name: '',
    age: 10,
    gender: 0
}
// 因为 Person接口形状 满足Animal的定义
getName(p)



// 类的兼容性

namespace ab {
    class Animal {}
    class Bird extends Animal {}
    let a: Animal;
    let b: Bird;
    a = b;
    b = a;
}

//函数的兼容性 ！！！
// 比较参数  可以少不能多

type Func = (a:number, b:number)=>void;
let sum: Func;
function f1(a:number, b:number):void {

}
sum = f1;
// 参数少一个可以
function f2(a:number) :void {}
sum = f2;
// 少二个参数也可以
function f3():void {}
sum = f3;
// 多参数不行
function f4(a:number,b:number,c:number):void{}
sum = f4;

// 比较返回值
type GetPerson = () =>{name:string,age:number};
let getPerson: GetPerson;
function g1() {
    return {name:'11', age:10}
}
getPerson = g1;
function g2() {
    return {name:'11', age:10,gender: 0}
}
getPerson = g2;
function g3() {
    return {name:'11'}
}
getPerson = g3;


// 函数的双向协变
// 参数可以传自己和自己的父类
// 返回值可以传自己和自己的子类



// 数字和枚举是兼容的
enum Colors{Red,Yellow}
let c:Colors;
c = Colors.Red;
c = 1;
let n:number;
n = 1;
n = Colors.Red;


export {}