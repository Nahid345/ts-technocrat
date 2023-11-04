{
    // promise
    
    type Todo ={
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo =async(): Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        return data;
        // console.log(data);

    }
  getTodo()



    // simulation
    const createPromise = (): Promise<string> => {
        return new Promise<string>((reslove, reject) => {

            const data: string = "something";
            if (data) {
                reslove(data);
            } else {
                reject('failed to load  data')
            }

        })
    }

    // calling create promise function
    const showData = async (): Promise<string> => {

        const data: string = await createPromise()
        return data;

    };

    showData();













}