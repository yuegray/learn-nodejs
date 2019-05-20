// nodejs异步编程的直接体现就是回调
// 异步编程依托于回调来实现

// 我们一边读取文件一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。 这样在执行代码时就没有阻塞或等待文件I/O操作。大大提高了nodejs性能，可处理大量的并发请求

// 回调函数一般作为函数的最后一个参数出现：
// function foo1(name, age, callback) {}

// function foo2(value, callback1, callback2) {}


// 阻塞代码实例
// var fs = require("fs")

// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log("程序执行结束")


// 非阻塞代码实例
// var fs = require("fs")
// fs.readFile('input.txt', function(err, data) {
//     if(err) {
//         return console.error(err)
//     }
//     console.log(data.toString())
// })

// console.log('程序执行结束！')
