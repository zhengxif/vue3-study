declare function jQuery1(selector:string):HTMLElement;
declare namespace jQuery1{
    function ajax(url:string):void;
}

// ts 语法，表示导出jQuery1
export = jQuery1;
// export default jQuery1