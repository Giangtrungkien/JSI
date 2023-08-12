//bai1
var arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice();
console.log(arr2);
let arr3 = [...arr1];
console.log(arr3);
//bai 2
arrA = ["Hello", " Xin chào"];
arrB = ["Bonjour", "Olá"];
let waysToSayHello1 = arrA.concat(arrB);
console.log(waysToSayHello1);
var waysToSayHello2 = [...arrA, ...arrB];
console.log(waysToSayHello2);
//bai 3
let arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arrSquare = arrX.map((num) => num * num);
let arrOdds = arrX.filter((num) => num % 2 !== 0);
console.log(arrSquare);
console.log(arrOdds);
//bai 4
function filterRange(arr, a, b) {
  if (a < 0 || b >= arr.length || a > b) {
    throw new Error("Invalid index range");
  }
  let filteredArr = [];
  for (let i = a; i <= b; i++) {
    filteredArr.push(arr[i]);
  }

  return filteredArr;
}

let arr = [1, 5, 4, 6];
let a = 0;
let b = 2;

let result = filterRange(arr, a, b);
console.log(result);
//bai 5
function filterRange1(arr, a, b) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a && arr[i] < b) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function filterRange1(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!(arr[i] > a && arr[i] < b)) {
      arr.splice(i, 1);
    }
  }
}
