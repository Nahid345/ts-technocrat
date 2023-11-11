{
    //class

    class Animal{
        // name:string;
        // specis: string;
        // sound: string;
        
        // parameter properties --> shorthand for declaring a class constructor parameter and class property in one location.Parameter properties can be confusing to those new to TypeScript as they are less explicit than other ways of declaring and initializing class members.

        constructor( public name:string, public specis:string, public sound:string){
            // this.name = name;
            // this.specis = specis;
            // this.sound = sound;
        }
         makeSound(){
            console.log(`The ${this.name} sound is ${this.sound}`)
         }
    }
       
const dog = new Animal("Sharpad Dog","Dog","bugbug");
const cat = new Animal("parsian cat","cat","mew mew")
 console.log(cat.sound);
 cat.makeSound()



 // question ---> 



    //
}