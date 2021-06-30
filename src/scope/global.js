var hello = 'Hello';
let world = 'World';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();
const helloWorld = () => {
    globalVar = 'Im global';
}
helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Gkkkk'
}
anotherFunction()
console.log(globalVar)