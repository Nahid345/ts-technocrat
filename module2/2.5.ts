{
    // function with generics
     
    
    const createArray = (param: string): string[] => {
      return [param];
    };

  
  // function with generics
    const createArrayWithGeneric = <T>(param: T): T[] => {
      return [param];
    };


    const aboutMe = <T>(param: T): T[] =>{
      return [param];
    }

     const result = aboutMe <string>("Nahid Parvej")
 
     const res1 = createArray("Bangladesh");
     const resGeneric = createArrayWithGeneric<string>("Bangladesh");
   
  




    type User = { id: number; name: string };
  
    const resGenericObj = createArrayWithGeneric<User>({
      id: 222,
      name: "Mr. Pashan",
    });

  
    // tuple with generic
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
      return [param1, param2];
    };
  
    const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
    const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
      name: "Asia",
    });

    console.log(res11);


  
    const addCourseToStudent = <T>(student: T): T => {
      const course = "Next Level Web Development";
      return {
        ...student,
        course,
      };
    };
  
    const student1 = addCourseToStudent({
      name: "Mr X",
      email: "x@gmail.com",
      devType: "NLWD",
    });
    console.log(student1);
  
    const student2 = addCourseToStudent({
      name: "Mr Y",
      email: "y@gmail.com",
      hasWatch: "Apple Watch",
    });
  
    //
  }