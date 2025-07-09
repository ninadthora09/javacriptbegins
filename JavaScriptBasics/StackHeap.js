//stack and heap Memory 
//primitive is stored in stack memory
//Non-primitive is stored in heap memory


//#1 Primitive never gives the reference jsut the copy
let myName="ninad";
let anotherName=myName;

anotherName="thorat"
console.log(anotherName);
console.log(myName);


//#2 Non premitive gives direct reference
let user={
    id:"ninad@123",
    pass:234,
};

let userTwo= user;
userTwo.pass=345; 
console.log(userTwo.pass); //345
console.log(user.pass);  // 345 


