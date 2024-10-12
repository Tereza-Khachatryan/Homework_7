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
}

let user1 = new Person("Tereza", "Khachatryan", "female", 20)
console.log(user1.firstName)