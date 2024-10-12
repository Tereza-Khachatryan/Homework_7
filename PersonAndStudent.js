class Person {
    #firstName
    #lastName
    #gender
    #age
    constructor (firstName , lastName , gender , age){
        this.#firstName = firstName
        this.#lastName = lastName
        this.#gender = gender
        this.#age = age
    }

    get firstName (){
        return this.#firstName
    }

    get lastName (){
        return this.#lastName
    }

    get gender (){
        return this.#gender
    }

    get age (){
        return this.#age
    }
    toString(){
        return `${this.#firstName} ${this.#lastName} is ${this.#age} years old`
    }
}

    class Student extends Person {
        #year
        #fee
        #program
        constructor(firstName, lastName , gender , age){
            super (firstName , lastName ,gender ,age)
            this.#year = 1
            this.#fee = 0
            this.#program = []
        }

        get year (){
            return this.#year
        }

        get program (){
            return this.#program
        }

        passExam (programName , grade){
            this.#program.push({programName : programName , grade: grade})
        }

        isAllPassed (){
            const notPassingGrade = this.#program.some(({grade}) => grade < 50)
            if(notPassingGrade) {
                this.#program = []
                return "Try next year , your grade is less"
            } else {
                this.#year ++
                this.#program = []
                return "Congratulations , you passed"
            }
        }
}
const student1 = new Student ("Tereza" , "Khachatryan" , "female" , 20)

student1.passExam("English", 90)
student1.passExam("Russian", 40)

console.log(student1.isAllPassed())


