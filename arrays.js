const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);
// console.log(arr.pop());
// console.log(arr);

//console.log(arr.slice(1,3));

// for( let i =0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// const forEach = arr.forEach((el, index) => {
//     console.log(el);

//     return el;
// })

// const map = arr.map( el => {
//     console.log(el);

//     return el;
// })

for(const el of arr) {
    console.log(el);
}

for(const el in arr) {
    console.log(el);
}

//console.log(map);