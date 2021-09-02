"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//With Void as the return type, it deliberately states that this function doesn't 
//return anything
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, someFunction) {
    const result = n1 + n2;
    someFunction(result);
}
printResult(add(5, 12));
//CombineValues should accept any function that takes two parameters where 
//each parameter is a number and the function returns a number
let combineValues;
combineValues = add;
//Since printResult doesn't match the function type we declared above, it 
//won't compile and it will throw an error
//* combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
