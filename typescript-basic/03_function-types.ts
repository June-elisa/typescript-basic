/*
 * @Author: Reya
 * @Date: 2022-05-03 15:00:57
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 15:16:14
 * @Description: 函数
 */

// ? 可选
// 可选参数后面不能再添加确定参数，那会导致参数判断混乱
const add = (x: number, y: number, z?: number): number => {
    if (typeof z === 'number') {
        return x + y + z
    } else {
      return x + y  
    }
    
}

// 用interface声明函数类型
// 返回不是用 => ，而是用 ：
interface ISum{
    (x: number, y: number, z?: number):number
}



// 注意：这个“=>”不是ES6的箭头函数，而是TS中声明函数类型返回值的方法
// 在TS中，凡是在冒号后面，都是在声明类型，和实际的代码逻辑无关
// let add2: (x: number, y: number, z?: number) => number = add
let add2: ISum = add

 