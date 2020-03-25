function a() {
    console.log("Imprimiendo function A");
}

function b() {
    console.log("Imprimiendo function B");
}

function c() {
    console.log("Imprimiento function C");
}

function sumOperation() {
    var result = 50 + 13;
    return result;
}

function printResult() {    
    console.log("Result is: " + sumOperation());
}

a(); b(); c();
//sumOperation();
printResult();