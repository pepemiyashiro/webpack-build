export let currentNumber = 0;

export function showNumber() {
    currentNumber++;
    console.log('ex-module showNumber() :' , currentNumber);
}
