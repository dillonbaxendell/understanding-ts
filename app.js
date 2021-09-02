"use strict";
//We don't know yet what the user will eventually enter, so...
let userInput;
let userName;
userInput = 5;
userInput = 'Dillon';
//Since unknown is less flexible than 'any' type, we can't assign userInput to userName
//because userName needs to be a string. So we check the type of userInput before doing so.
if (typeof userInput === 'string') {
    userName = userInput;
}
//NEVER TYPE
//Never is a newer type, so it's not built into this yet. 
//Never makes it clear that this function will never return anything.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('An error occurred!', 500);
console.log(result);
//Understanding TypeScript Lib
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Clicked!');
});
