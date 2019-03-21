// 1、声明generatoe函数时，在函数名前面加一个*即可
// 2、每次执行一次yield，即执行函数体到下一个yield的位置

function* plusParams (pa) {
    const num1 = 10;
    let data1 = yield pa + num1;

    const data2 = data1 + num1;
    yield data2;
}

let generatorFun1 = plusParams(1); // 获取函数，此时函数中的 pa = 1

let res1 = generatorFun1.next(2);   
// 返回 {
//          value: 11   // 1 + 10
//          done: false // 表示函数未执行完毕
//      }
// 第一次调用的next()传递的参数2没有作用
// 此时传递的参数赋值未能赋值，因为data2接受的是下一次next()传递的参数

let res2 = generatorFun1.next(3);  
// 当再次next()时，3传递给了data1， 此时 data1 = 3
// 返回 {
//          value: 13   // 3 + 10
//          done: true // 表示函数执行完毕了
//      }