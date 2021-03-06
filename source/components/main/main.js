// Styles
import './main.scss';

import {currentNumber, showNumber} from '../module-example/ex-module';
console.log('App.js Loaded as main dependency');

const hi = 'Hello Webpack & Browser Sync!';
document.write(hi);

/**
 * Module Example
 */

 console.log('exampleModule.currentNumber : ' , currentNumber);
 showNumber();


(() => console.log("Hi I'm an iife") )();



// good
const concatenateAll = (a, b, ...args) => args.join('');

console.log( concatenateAll('first', 'second', 1, 2, 3, 4, 5, 6, 7, 8 ,9 ) );


const isGreaterThanCero = number => ( (number > 0) ? true : false );

console.log( isGreaterThanCero('Soy Foo'), typeof isGreaterThanCero('Soy Foo') );

const reducedArry = [0, 1, 2, 3, 4].reduce( (accumulator, currentValue ) => accumulator + currentValue );

console.log(reducedArry);


function defaultValues( a = 'First', b = 'Second') {
  return a + b;
}

console.log( defaultValues('todo','nadass') );
