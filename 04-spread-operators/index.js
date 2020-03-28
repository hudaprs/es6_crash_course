/**
 * Default parameter
 */

 const defaultParam = ($greeting = 'Hello World') => {
   return console.log($greeting);
 }

 defaultParam()

 /**
  * Spread Operator
  */
 let argsOne = [1, 2, 3];
 let argsTwo = [4, 5, 6];

 const test = () => {
   return console.log(`${argsOne},${argsTwo}`)
 }
 
 test(...argsOne, ...argsTwo)