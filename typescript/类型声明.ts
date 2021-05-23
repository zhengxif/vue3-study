// 类型声明可以让我们不需要将js重构为ts,只需要加上声明文件就可以使用系统
// 类型声明在编译的时候都会被删除，不会影响真正的代码
// 关键字declare表示声明的意思，我们可以用它来做出各种声明

//普通类型声明
declare let age:number;
declare function getName():void;
declare class Animal{};


// 外部枚举
declare enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter
}

let seasons = [
    Seasons.Spring,
    Seasons.Summer,
    Seasons.Autumn,
    Seasons.Winter,
]

// 命名空间
// 一个全局变量有很多子属性，就可以用namespace
// 声明文件里的namespace表示一个全局变量包含很多子属性

declare namespace $1{
    function ajax(url:string, options:any):void 
    let name:string;
    namespace fn{
        function extend(object:any):void
    }
}
$1.ajax('/get', {});
$1.name;
$1.fn.extend({});

export {}