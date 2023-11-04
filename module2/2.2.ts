{

// interface

type User1 ={
    name: string;
    age: number;
}

interface User2{
    name: string;
    age: number;
}

 type rollNumber = number; // primitive type alias use kraaa hy but interface use kraa jaynh

 // type alias use kreee object extend kora

 type userWithRoll1 = User1 & {role: string}

const user1 : userWithRoll1 ={
     name: "nahid",
     age: 20,
     role: "manager"

}

// interface use koree object extend kraa

interface userWithRoll2 extends  User2{
    role: string;
}

const user2 : userWithRoll1 ={
    name: "nahid",
    age: 20,
    role: "manager"

}

// array
//  --> type alias
type Roll1= number[];

const rollNumber1: Roll1 = [12,3,4]

// ..> interface

interface Roll2{
    [index: number]: number
}
const rollNumber: Roll2 = [12,3,4]


// function

// ---> Type alias
type Add =(num1: number, num2: number)=> number;

const add:Add=(num1,num2)=> num1+num2

// ----> interface

interface Add1{
    (num1:number, num2:number): number
}

const add1:Add1 =(num1,num2) => num1+num2

}