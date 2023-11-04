{



// generic type

type GenericArray<T> = Array<T>

// const rollNumbers:number[] = [1,2,3,4]

const rollNumbers: GenericArray<number>=[1,2,3]

// const mentors: string[] = ["mr","nr","Np"];

const mentors: GenericArray<string> =["mr","nr","Np"];


// const boolean: boolean[] =[true,false,true]

const boolean: GenericArray<boolean> =[true,false,true]

// array of obejct
const user: GenericArray<{name:string,age:number}> =[
    {
        name: 'nahid',
        age:23,
        
    },
    {
        name: 'parvej',
        age:25
    },
   
]

type GenericTuple<X,Y> = [X,Y]

const manus: GenericTuple<string,string> = ['Mr. x', "Mrs.y"]


const userId : GenericTuple<number,{name:string,email:string}> =[123,{name:"nahid",email:'nahidbnm'}]




















}