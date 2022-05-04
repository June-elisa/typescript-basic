/*
 * @Author: Reya
 * @Date: 2022-05-03 22:33:11
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-04 08:16:03
 * @Description: 类型别名
 */
// type aliase 类型别名 
let sum: (x: number, y: number) => number
const result = sum(1,2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(2, 3)
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123

const str: 'name' = 'name'
const number: 1 = 1
// 限定值选项 联合类型 |
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'

interface IName {
  name: string
}
// 交叉类型 &
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }

// 类型别名和 interface的extends非常类似，都是为了实现对象形状的组合和扩展