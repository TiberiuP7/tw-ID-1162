//Ex. 1

const string = ["Mihai", "Tibi", "Andrei"];

console.log(string.join(' '));

const arr = (arr) => {
    return arr.join(' ');
}

const arrString = () => string.join(' ');

console.log(arrString());

console.log(arr(string));

console.log(string.concat(''));

const arr2 = (arr) => {
    return arr.concat('');
}

// for(const el of arr2) {
//     console.log(el);
// }

// function sumaElementeArray(arr) {
//     const string = arr.join('');

// }

// const concatenareArrays = sumaElementeArray(["Mihai", "Tibi", "Andrei"])

// console.log(concatenareArrays);


//Ex. 2

const string2 = "Mihai are mere.";
const string3= "Tibiu are pere.";

function compareStrings(str1, str2) {
    if(str1.length !== str2.length) {
        return -1;
    }
    else {
        var different = 0;

        for(let i = 0; i< str1.length; i++) {
            if(str1[i] !== str2[i]) {
                different++;
            }
        }
    return different;
    }
}

const result = compareStrings(string2, string3);

console.log(result);

// Acelea două array-uri sunt identice → returneaza 0
const result2 = compareStrings(["a", "b"], ["a", "b"]);
console.log(result2);

// Acelea două array-uri au 2 diferențe → returneaza 2
const result3 = compareStrings(["a", "b", "c"], ["x", "y", "c"]);
console.log(result3);

// Array-uri cu lungimi diferite → returneaza -1
const result4 = compareStrings(["a"], ["a", "b"]);
console.log(result4);

//Ex. 3

const str2= "Mihai are mere.";
const litera = "a";

function countCharacterOccurrences(str, char) {
    let count = 0;

    // for( let i =0; i< str.length; i++) {
    //     if(str[i] === char) {
    //         count++;
    //     }
    // }

    for(const lit of str) {
        if(lit === char) {
            count++;
        }
    }

    return count;
}

const result5 = countCharacterOccurrences(str2, litera);

console.log(result5);

//Ex. 4

const arr3= ["Mihai", "are", "mere", "si", "pere"];
const arr4= ["Tibiu", "are", "portocale", "si", "pere"];

function intercalareArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        throw new Error("Array-urile nu au aceeasi lungime");
        // return "Array-urile nu au aceeasi lungime";
    }
    else {
        const result = [];

        for(let i=0; i< arr1.length; i++) {
            // result.push(arr1[i]);
            // result.push(arr2[i]);
            result.push(arr1[i], arr2[i]);
        }

        return result;
    }
}

const result6 = intercalareArrays(arr3, arr4);

console.log(result6);

//Ex. 5

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function meanArrayElements(arr) {
    // let sum = 0;

    // for(let i =0; i< arr.length; i++) {
    //     sum += arr[i];
    // }
    // return sum / arr.length;

    let sum = arr.reduce((acc, el) => acc + el, 0);

    return sum / arr.length;
}

const result7 = meanArrayElements(arr5);

console.log(result7);
    

