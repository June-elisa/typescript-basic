/*
 * @Author: Reya
 * @Date: 2022-05-03 15:21:18
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-03 15:53:03
 * @Description: 类型推论 & 联合类型 & 类型断言
 */

 // type inference 类型推论
let str = 'str'

// union types 联合类型
let numberOrString: number | string
numberOrString = 'abc'
numberOrString = 123
// 只能访问联合类型上共有的属性和方法，访问差集会报错
// numberOrString.length
numberOrString.toString()


// type Assertion 类型断言
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

//type guard 类型守卫:是一种能够确认具体类型的 机制
// 当遇到联合类型时，使用条件语句，可以自动帮我们缩小条件范围
// 常见关键字：typeof instanceof
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length
  } else {
    return input.toString().length
  }
}