/*
 * @Author: Reya
 * @Date: 2022-05-03 11:27:16
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 15:53:35
 * @Description: interface 接口
 */

// readonly用在属性上，const用在变量上
interface Person {
    readonly id: number; // 只读
    name: string;
    age?: number; // 可选
}

let reya: Person = {
    id:1,
    name: 'Reya',
    age: 22,
}
// reya.id = 12