const findSum = function(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const number = array[i];

        sum = number + sum;
    }

    return sum;
    // your code here - don't forget to return a number!
};

const findFrequency = function(array) {
// your code here - don't forget to return an object!

    var countObj = {
        'a': 4,
        'b': 2,
        'c': 1
    }
};

const isPalindrome = function(str) {
    var lowCase = str.toLowerCase();

    var revOrder = lowCase.split('').reverse().join('');

    return revOrder === lowCase;
// your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
// your code here - don't forget to return a number!
    var largestTwoNums = 0;

    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        const nextNum = array[i + 1];
        const numProduct = currentNum * nextNum

        if (numProduct > largestTwoNums) {
            largestTwoNums = numProduct;            
        }
    }

    return largestTwoNums;
};

const removeParenth = function(str) {
    str = str.replace(/ *\([^)]*\) */g, "").trim();
    
    return str;
// your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
    let letterValue = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
        sum = 0,
        i;

    word = str.toLowerCase();
    for (i = 0; i < word.length; i++) {
        sum += letterValue[word[i]]
    }
    return sum;
        
    
    

    

// your code here - don't forget to return a number!
};
