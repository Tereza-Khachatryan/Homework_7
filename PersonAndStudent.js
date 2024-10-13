class Person {
    _firstName
    _lastName
    _gender
    _age
    constructor (firstName , lastName , gender , age){
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    }

    get firstName (){
        return this._firstName
    }

    get lastName (){
        return this._lastName
    }

    get gender (){
        return this._gender
    }

    get age (){
        return this._age
    }
    toString(){
        return `${this._firstName} ${this._lastName} is ${this._age} years old`
    }
}

    class Student extends Person {
        _year
        _program
        #fee
        constructor(firstName, lastName , gender , age){
            super (firstName , lastName ,gender ,age)
            this._year = 1
            this.#fee = 0
            this._program = []
        }

        get year (){
            return this._year
        }

        get program (){
            return this._program
        }

        passExam (programName , grade){
            this._program.push({programName : programName , grade: grade})
        }

        isAllPassed (){
            const notPassingGrade = this._program.some(({grade}) => grade < 50)
            if(notPassingGrade) {
                this._program = []
                return "Try next year , your grade is less"
            } else {
                this._year ++
                this._program = []
                return "Congratulations , you passed"
            }
        }
}
const student1 = new Student ("Tereza" , "Khachatryan" , "female" , 20)

student1.passExam("English", 90)
student1.passExam("Russian", 40)

console.log(student1.isAllPassed())


