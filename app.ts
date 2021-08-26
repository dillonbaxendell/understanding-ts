//We don't know yet what the user will eventually enter, so...
let userInput: unknown;

let userName: string;

userInput = 5;
userInput = 'Dillon';

//Since unknown is less flexible than 'any' type, we can't assign userInput to userName
//because userName needs to be a string. So we check the type of userInput before doing so.
if (typeof userInput === 'string') {
    userName = userInput;
}
