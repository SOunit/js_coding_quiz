function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + ' ' + name);
  };
  return greetingInfo;
}
var myFunction = Welcome('John');
myFunction('Welcome '); //Output: Welcome John
myFunction('Hello Mr.'); //output: Hello Mr.John
