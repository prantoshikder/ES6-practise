function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(10);
console.log(result);

const doubleIt1 = function(num) {
    return num * 5;
}
const result1 = doubleIt1(10);
console.log(result1);


// -----------ES6
// single parameter
const doubleIt2 = num => num * 10;
const result2 = doubleIt2(20);
console.log(result2);

// multiple parameter 
const add = (x, y) => x + y;
const addition = add(50, 10);
console.log(addition);

// empty parameter
const nullParameter = () => 5;
const result3 = nullParameter();
console.log(result3);

// arry multiple function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total;
}

const result4 = doMath(10, 5);
console.log(result4);