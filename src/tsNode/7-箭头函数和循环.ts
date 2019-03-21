// 关于箭头函数
// 1、箭头函数没有arguments (可以用rest参数替代)
// 2、箭头函数没有super
// 3、箭头函数不能改变this的指向
//    箭头函数没有this 
// (箭头函数中，this属于词法作用域，直接由上下文确定，
// 对于普通函数中指向不定的this，箭头函数中处理this无疑更加简单)
// 4、箭头函数没有new.target绑定
// 5、箭头函数没有原型，不能使用new
// 6、不支持重复的命名参数


// 循环 forEach  for...in  for...of
var arr2 = [1, 2, 3, 4]
var obj1 = {
    a: 1,
    b: 2,
    c: 3
}

// forEach只能循环数组
arr2.forEach( item => {
    console.log(item)
})

// for...in 循环的是对象（数组）的key (如果是数组，则循环的是角标index)
// ES5
for(var n in obj1) {
    console.log(n)
    console.log(obj1[n])
}

// for...of 循环的是数组的value，并且可以用break/continue/return
// ES6
for(var m of arr2) {
    if (m > 2) {
        break;
    }
    console.log(m)
}