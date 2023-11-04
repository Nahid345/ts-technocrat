{

// generic constraints keyof operator


type vehicle = {
    bike: 'string';
    car: 'string';
    ship: 'string';
}

type owner = "car" | 'ship' | "bike"  // ---> manual union 

type owner1 = keyof vehicle      // manual r aytaa smae
 


const getPropertyValue = <X,Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key];
}


const user ={
    name: "nahid parvej",
    age: 23,
    address: 'uk'

}

const result = getPropertyValue(user,"address")

console.log(result);



// user['name'] // nahid parvej asbe



















}