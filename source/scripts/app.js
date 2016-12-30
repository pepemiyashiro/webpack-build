import {currentNumber, showNumber} from './ex-module';
console.log('App.js Loaded as main dependency');

const hi = 'Hello Webpack & Browser Sync!';
document.write(hi);

/**
 * Module Example
 */

 console.log('exampleModule.currentNumber : ' , currentNumber);;
 showNumber();
