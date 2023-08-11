/*

function swapArray(array) {

    const removedFirstIndex = array.splice(0, 1);

    const removedLastIndex = array.splice(array.length - 1, 1);
    
    const newFirstIndex = removedLastIndex;

    const newLastIndex = removedFirstIndex
    
    array.push(newLastIndex);
    array.unshift(newFirstIndex);
    console.log(array);

}

swapArray(['miss you', 1, 3, 'king', 'John'])

*/

/*
for (let i = 5; i >= 0; i--){
    console.log(i);
}

for (let i = 0; i <= 10; i+=2){
    console.log(i);
}

const myArray = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < myArray.length; i++){
    const num = myArray[i] + 1;
    newArray.push(num)
    console.log(newArray)
}

*/


/*
function addOneArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {

        const num = array[i] + 1;
        newArray.push(num)
        console.log(newArray)
    }
}

addOneArray([1, 2, 3, 4, 5])

*/

/*
function addNum(array, num) {

    newArray = [];

    for (let i = 0; i < array.length; i++) {
        const nums = array[i] + num;
        newArray.push(nums);
        console.log(newArray)
    }

}

addNum([1, 2, 3, 4, 5], 2);
*/

/*
function addArrays(array1, array2) {
    const newArray = [];

    for (let i = 0; i < array1.length; i++) {
        const arraySum = array1[i] + array2[i]
        newArray.push(arraySum);
        console.log(newArray)
    }
}

addArrays([8, 9, 5], [1, 2, 3,]);
*/

/*
function countPositive(array) {
    newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            newArray.push(array[i])
        }

        console.log(newArray.length)
    }
}

countPositive([1, 2, 4, 6, 7, -1, 0]);
*/

/*
function minMax(array) {

    const num = {
        max: 0,
        min: 0,
    }

    let minNum = [0]
    let maxNum = [0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        } else if (array[i] < minNum) {
            minNum = array[i]
        }
    }

    num.max = maxNum;
    num.min = minNum;

    if (array === []) {
        num.max = null;
        num.min = null;
    } else if (array.length <= 1) {
        num.max = array;
        num.min = array;
    }

    console.log(num)
}

minMax([]);

*/
/*
function countWords(words) {

   let wordcounter = {};

    for (let i = 0; i < words.length; i++) {
        wordcounter[words[i]];

        
        if (wordcounter[words[i]]) {
            wordcounter[words[i]] += 1;
        }
        
        console.log(wordcounter)
    }
}

countWords(['come', 'come', 'move', 'sing']);
*/

function countWords(words) {
    let wordCounter = {}

    for (let i = 0; i < words.length; i++) {
        wordCounter[words[i]]

        if (wordCounter[words[i]]) {
            wordCounter[words[i]] += 1;
        } else {
            wordCounter[words[i]] = 1;
        }
    }
    console.log(wordCounter)
}

countWords(['come', 'go', 'come', 'come', 'kill', 'kill']);

/*
function checkArray(array) {

    const targetString = 'search';

    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === targetString) {
            console.log(i);
            break;
        }
        
    }
}
*/

/*
checkArray(['come', 'king', 'movie', 'gorl', 'search', 'home', 'search', 'king', 'search']);

function findIndex(array, word) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
            break;
        } 
    }
    return -1
}

findIndex(['come', 'king', 'movie', 'gorl', 'search', 'home', 'search', 'king', 'search'], 'home');
*/

/*
function removeEgg(foods) {
    let result = [];

    for (let i = 0; i < foods.length; i++) {
        if(foods[i] === 'egg') {
            continue;
        } 
        result.push(foods[i]);
        console.log(result)
    }
}

removeEgg(['corn', 'rice', 'egg', 'milk', 'egg', 'sugar']);
*/

/*
function removeEgg(foods) {
    let result = [];
    let eggRemoved = 0;

    for (let i = 0; i < foods.length; i++) {
        if(foods[i] === 'egg' && eggRemoved < 2) {
            eggRemoved++;
            continue;
        } 
        result.push(foods[i]);
        console.log(result)
    }
}

removeEgg(['corn', 'rice', 'egg', 'milk', 'egg', 'sugar', 'egg']);
*/

/*

function removeEgg(foods) {
    const originalArray = foods.slice();
    console.log(originalArray)
    const reverseFoods = foods.reverse();

    let result = [];
    let eggRemoved = 0;

    for (let i = 0; i < reverseFoods.length; i++) {
        if(reverseFoods[i] === 'egg' && eggRemoved < 2) {
            eggRemoved++;
            continue;
        } 
        result.push(reverseFoods[i]);
        result.reverse();
        console.log(result)
    }
}

removeEgg(['corn', 'rice', 'egg', 'milk', 'egg', 'sugar', 'egg']);

*/

/*

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0){
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i)
    }
}

 */

function uniqueArray(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (newArray[array[i]]) {
            continue;
        }
        newArray.push(array[i]);
    }

    console.log(newArray)
}

uniqueArray(['corn', 'rice', 'egg', 'milk', 'egg', 'sugar', 'egg'])

