// 1 Rest
// 即在声明函数参数时，可以用 ...args，表示可以传递任意个数的参数

function test5 (...args) :void {
    args.forEach(arg => {
        console.log(arg)
    })
}

test5(1, 2, 3)
test5(7, 8, 9, 10, 11)


// 2 Spread
// 即在调用固定参数的函数时，可以用...args作为参数来调用该函数

// function test6 (a: number, b: number, c: number) :void {
//     console.log(a)
//     console.log(b)
//     console.log(b)
// }

// var arg1 = [1, 2]
// test6(...arg1);

// var arg2 = [1, 2, 3, 4, 5]
// test6(...arg2)