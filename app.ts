function add(n1: number, n2: number) {
    return n1 + n2;
}

//With Void as the return type, it deliberately states that this function doesn't return anything 
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

// let someValue: undefined;