class Parent{
    constructor(){
        this.fName="Shwaznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
        
    }

    getFullName(){
        return (this.name +" "+this.fName);
    }
    
}
let child1= new Child("Arnold");
console.log(child1);
console.log(child1.getFullName());