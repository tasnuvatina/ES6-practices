//global scope

var a =10;
let b =2 ;
const c =40;
console.log(`global scope:`,a,b,c);


//function scope
function abc(){
    var a =23;
    let b =266 ;
    const c =36;
    console.log(`global scope:`,a,b,c);
}
abc();


//local scope
if (true) {
    var a =11;
    let b =200 ;
    const c =2342;
    
}

console.log(`global scope:`,a,b,c);
