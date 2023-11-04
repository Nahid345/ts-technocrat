{


    // contraints  ->>> means force
    // ami bole dite pari kon params/type thkte e hbeee



    const addCourseToStudent = <T extends { id: number, name: string, email: string }>
        (student: T): T => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        };
    };

    const student3 = addCourseToStudent(
        {
            id: 23,
            name: 'parvej',
            email: "nahid@gmail.com"

        })

    const student1 = addCourseToStudent<
        {
            id: number,
            name: string;
            email: string;
            devType: string;
        }>({
            id: 33,
            name: "Mr X",
            email: "x@gmail.com",
            devType: "NLWD",
        });
    console.log(student1);

    const student2 = addCourseToStudent({
        id: 34,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });











}