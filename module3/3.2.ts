{
   //Inheritance


   class Person{
    name: string;
    age: number;
    address: string;

    constructor(name:string,age:number,address: string){
      this.name =name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHour:number){
      console.log(`${this.name} will be sleep for ${numOfHour}`);
    }

   }


   class Student extends Person{
  
      constructor(name:string,age:number,address: string){
       super(name,age,address)
      }

   }

   const student1 = new Student("Mr. x",24,"Bogura");
   console.log(student1);
   student1.getSleep(7)


   class Teacher extends Person{
     desinagtion: string;
    constructor(name:string,age:number,address:string,desinagtion:string){
      super(name,age,address)
      this.desinagtion = desinagtion;

    }

      takeClass(numOfClass: number){
        console.log(`${this.name} take class ${numOfClass}`)
      }  

   }

   const teacher1 = new Teacher("Mr. Y",34,"uk", "prefessor");
   console.log(teacher1.desinagtion);
   teacher1.takeClass(6)











}