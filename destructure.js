// let person ={name:'Jack',age:13,gfName:'emma',phone:'0177777777',address:'california'}
// let {phone,gfName,age}=person;
// console.log(phone,gfName,age);

// const friends=['sakib','rakib','shofiq','ratib','karim','rahim'];

// let [chotofrnd,borofrnd,...others]=friends;
// console.log(chotofrnd,borofrnd,others);


let complexObj={
    name:'abc',
    info:{
        age:30,
        leader:"tom leader"
    }
}
let {leader}= complexObj.info;
console.log(leader);