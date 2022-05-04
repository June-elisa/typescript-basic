/*
 * @Author: Reya
 * @Date: 2022-05-04 08:18:17
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-04 09:03:27
 * @Description: 使用第三方库
 */
// 直接使用ts会报错
// jQuery('#food')
// 使用declare告诉tsc，这个变量已经在其它地方被定义了，请不要报错
// 通常会把这个声明语句放到一个单独的文件中去，以 .d.ts 结尾
// declare var jQuery:(selector:string) => any;

// import { Action } from 'redux'
// jQuery('#id')

// 安装@types/jquery后，不会报错了,也有方法提示了
// 注意：要在工作区打开定义文件，才不报错
jQuery('#id')


// 现在很多库都是源代码自带type定义，不需要像jquery要先安装本体，再安装类型文件 -- 例如redux
import {Action} from 'redux'
 