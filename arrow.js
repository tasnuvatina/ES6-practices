//function declaration

// function doubleIt(num) {
//     return(num *2);
// }

// console.log(doubleIt(2));


//function expression
// let x= function doubleIt(num) {
//         return(num *2);
//     }

// console.log(x(2));

//arrow function

const doubleIt= num => num *2;
console.log(doubleIt(2));

const add=(x,y) => x+y;
console.log(add(3,5));

const give5 = ()=>5;
console.log(give5());

const big=(x,y)=>{
    const sum =x + y;
    return sum
}

console.log(big(5,5));
