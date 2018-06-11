// function doIt() {
//     console.log('I am done');
// }
// setTimeout(doIt, 5000)
function foo(func) {
    func();
}

function bar() {
console.log('Hello, I am bar!');
}

foo(bar);

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback){
    // initialize an array
    let arr = [];

    // push each number starting from startIndex up to stopIndex inclusive
    for (let i = startIndex; i < stopIndex + 1; i++ ){
        arr.push(i);
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
            console.log(arr[i] + ' : ');
            threeCallback();
            fiveCallback();
        }else if (arr[i] % 3 == 0){
            console.log(arr[i] + ' : ')
            threeCallback();
        }else if(arr[i] % 5 == 0){
            console.log(arr[i] + ' : ')
            fiveCallback();
        }
    } 
}

function sayThree(){
    console.log('sayThree ');
}

function sayFive(){
    console.log('sayFive ');
}

threeFive(10, 15, sayThree, sayFive);

function repeatStringNumTimes(str, num){
    if (num < 0 ) return '';
    let result = '';
    // for loop
    for (let i = 0; i < num; i++){
        result +=str;
    }
    console.log(result);

    // while loop
    let i = 0; 
    while (i < num){
        result+=str;
        i++
    }
    console.log(result);

    // do loop
    do {
        result += str;
        i++;
    } while (i < num);
    console.log(result);
}

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for (let j = 0; j < arr[i].length; j++){
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  multiplyAll([[1,2],[3,4],[5,6,7]]);

// x is an integer and stored in stack
// when we call f1 we make a copy of x so the value
// of x is never changed
let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);


// y is an object and is stored in heap
// when we call f2 we are accessing the object
// through a pointer on the heap so whetever changes 
// we make will be affected on the pbject
let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

let createBase = function(base){
    return function(val){
        return base + val;
    }
}

let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


let uniqueArray = arrArg => {
    return arrArg.filter((elem, pos,arr) => {
      return arr.indexOf(elem) == pos;
    });
  };

  console.log(uniqueArray(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']));
