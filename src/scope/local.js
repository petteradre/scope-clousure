const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}; 
helloWorld();


var scope = "I am global";
const functionScope = () => {
    var scope = "Im Just a local";
    const func = () => {
        return scope;
    }
    console.log(func());
}
functionScope();