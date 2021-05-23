// xx.d.ts 类型声明文件 要在tsconfig.json 中include中配置

// 声明的是全局变量
declare const $:(selector:string)=>{
    click():void;
    width():void
}



// 查找声明文件
// 如果是手动写的声明文件，那么需要满足以下条件之一，才能被正确识别
// 1、给package.json 中的types或typings字段指定一个类型声明文件地址
// 2、在项目根目录下，编写一个index.d.ts文件
// 3、针对入口文件（package.json中的main字段指定的入口文件），编写一个同名不同后缀的.d.ts文件
// {
//     name: 'mylib',
//     version:'1.0.0',
//     main:'lib/index.js',
//     types: 'myLib.d.ts'
// }


// 先找myLib.d.ts
// 没有在找index.d.ts
// 还没有再找lib/index.d.ts
// 还找不到就认为没有类型声明了


// npm声明文件可能的位置
// 1、先看package.json 的types
// 2、node_modules/jquery/index.d.ts
// 3、node_modules/@types/jquery/index.d.ts
// 4、typings/jqeury/index.d.ts

