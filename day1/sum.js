const sum = (...arg)=>{
    return arg.reduce((prev,cur)=> prev + cur ,0)
}

const str = '1705E'

// exports = sum;
// exports.sum = sum;
// exports.str = str; 

module.exports = {
    sum,
    str
}
// module.exports = sum;
// module.exports = str;

// console.log(arguments); //函数的参数

console.log(arguments.callee +''); 

