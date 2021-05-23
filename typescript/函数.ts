// 主要关心 返回值 和参数

function sum1(a:string, b:string):string {
    return a + b
}

sum1('a', 'b')

// 表达式
const sum2:(a:number, b:number) => number = (a:number, b:number) :number => a + b

// 类型别名
type Sum = (a:number, b:number) => number
const sum3:Sum = (a:number, b:number) :number => a + b


// 接口定义类型
interface Sum1{
    (a:number, b:number):number
}
const sum4:Sum1 = (a:number, b:number):number => a + b;

// interface与type 区别
// interface 可以被继承，可以被类来实现
// type 仅仅是一个别名， 一般在定义联合类型或者临时变量时用到，Sum = ((a:number, b:number) => number) | string, 是个函数或者string


// 可选参数
function print(name:string, age?:number):void {
    console.log(name, age)
}
print('11')
print('11', 11)

// 默认值
function ajax(url:string,method:string='GET') {
    console.log(url, method);
}
ajax('111');


//函数的重载
// 多个函数声明，一个实现
let obj:any = {};
function add(val: string):void
function add(val: number):void
function add(val: number|string):void{
    if (typeof val === 'string') {
        obj.name = val;
    } else {
        obj.age = val;
    }
}

