// 1 参数默认值
// 即函数在声明的时候可以声明默认值，当调用时没有传递该参数时，按照默认值运行该函数
// 有默认值的参数要声明在所有参数的后面

function test2 (a: string, b: string, c:string) :void {
    console.log(a)
    console.log(b)
    console.log(c)
}
// test2('aa', 'bb') 此时会报错，因为函数声明了3个参数，调用是只传了2个参数

function test3 (a: string, b: string, c:string = 'jojo') :void {
    console.log(a)
    console.log(b)
    console.log(c)
}
test3('aaa', 'bbb') // 此时传递2个参数则不会报错，因为第三个声明了默认值


// 2 可选参数
// 在声明函数参数时，可以在参数名后面加上?，表示该参数是可传可不传的
// 注意： 可选参数必须在必传参数的后面

function test4 (a: string, b?: string, c: string = 'jojo') :void {
    console.log(a)
    console.log(b)
    console.log(c)
}
test4('aaaaa')
// 由于test4()函数的第二个参数是可选参数，因此调用是可以只传1个参数