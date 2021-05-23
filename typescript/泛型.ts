// 泛型, 用来在代码执行时传入的类型，确定结果

function createArray<T>(len:number, value:T):T[] {
    let result = [];
    for(let i = 0; i < len; i++) {
        result.push(value);
    }
    return result;
}
// 手动传入泛型类型
let arr1 = createArray<string>(3,'111');
// 类型推论出泛型类型
let arr2 = createArray(3, 1);


// 多个泛型
// 举例 元祖交换 [string, number] => [number, string]

const swap = <T,K>(tuple:[T, K]) :[K, T] =>{
    return [tuple[1], tuple[0]]
}


console.log(swap([1, '2']))


// 泛型类

class MyArray<T> {
    private list:T[] = [];
    add(value:T) {
        this.list.push(value);
    }
    getMax():T {
        return this.list[0]
    }
}
let array = new MyArray<number>();
array.add(1)



// 泛型于new
// {new():T} 描述类的构造函数
function factory<T>(type: {new():T}): T {
    return new type();
}
class Person{
    public name = 'zx'
}

const P1 = factory<Person>(Person);


// 泛型接口
// 泛型T在函数执行时定义
interface Calculate{
    <T extends number>(a:T, b:T)
}

let sum0: Calculate = function<T>(a:T,b:T){
    return a + b;
}

let sum: Calculate = function<T extends number>(a:T,b:T){
    return a + b;
}


sum<number>(1, 2)

// 泛型T, 定义函数时就传入了
interface Calculate2<T> {
    <U>(a:T, b:T):U
}

let sum2:Calculate2<number> = function<U>(a:number,b:number):U {
    return a as any
}
sum2<number>(1,2)

// 默认泛型
interface T2<T = string> {
}
type T22 = T2;


// 泛型约束----------------------重要
// extends 关键字
interface LengthWise {
    length: number
}

function logger<T extends LengthWise>(val:T) {
    console.log(val.length)
}

logger<string>('abc')

// typeof 操作符 返回类型
let obj = {
    length: 10
}
type Obj = typeof obj;  // Obj 符合LengthWise接口规范
logger<Obj>(obj);


// extend 关键字
// 判断类型符不符合跟extends继承没有一点关系，只看形状,有没有对应的属性
class GrandFather{}
class Father extends GrandFather{
}
class Child extends Father{}
function get<T extends Father>() {

}

get<GrandFather>()


export {}
