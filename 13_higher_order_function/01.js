// higher-order-function
// 1. function which reveices a function or returns a function
// * first-order-function <=> higher-order-function
const firstOrderFunc = () => console.log('Hello, I am a First order function');
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);
