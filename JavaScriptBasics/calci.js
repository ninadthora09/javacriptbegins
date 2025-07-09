// #6 Modules and modularity One of the important Thing 
// Modularity concept
//  it means that when we have different modules to handel or to export the filr to other main file

function add(a,b){
    console.log(a+b);  
}

function sub(a=2,b=1){ //default values
    console.log(a-b);  
}

function mul(a,b){
    console.log(a*b);  
}

function div(a,b){
    console.log(a/b);  
}

// this is nothing but the method used for exporting all the stuff from this file
module.exports= {
    addition: add,
    substraction: sub,
    multiplication: mul,
    division :div
};