/*
 * @Author: Reya
 * @Date: 2022-05-04 08:24:52
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-04 08:33:17
 * @Description: 声明文件
 */
// 使用declare告诉tsc，这个变量已经在其它地方被定义了，请不要报错
// 注意：这里并没有真的定义一个变量的实现，只是定义了全局变量jQuery的类型，仅仅用于编译时的检查，并不是实现功能的真正代码
// declare var jQuery: (selector: string) => any;

// 通常，这个声明文件，第三方库会准备好 npm install --save @types/jquery