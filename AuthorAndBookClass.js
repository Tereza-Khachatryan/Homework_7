class Author {
    #name
    #email
    #gender
    constructor (name, email ,gender){
        this.#name = name
        this.#email = email
        this.#gender = gender

}
    get name (){
        return this.#name
    }
    get gender (){
        return this.#gender
    }

    get email(){
        return this.#email
    }
    
    set name (newName){
        throw new Error ("Can not change the name")
    }
    set gender (newgender){
        throw new Error ("Can not change the gender")
    }
    set email(newEmail){
        throw new Error ("Can not change the email")
    }

    toString() {
        return this.#gender === "male" ? `Mr. ${this.#name}` : `Ms. ${this.#name}`
    }
}

let newName = "New Name"
let newEmail = "newEmail@gmail.com"
let newgender = "NewGender"

class Book {
    #title
    #author
    #quantity
    #price
    constructor (title, author, price, quantity){
        this.#title = title 
        this.#author = author
        this.#price = price
        this.#quantity = quantity
    }

    get title (){
        return this.#title
    }

    get price (){
        return this.#price
    }

    get author (){
        return this.#author
    }

    get quantity (){
        return this.#quantity
    }

    getProfit() {
        return this.#price * this.#quantity
    }

    toString() {
        return `Book Title: ${this.#title}, Author: ${this.#author.toString()}, Price: $${this.#price}, Quantity: ${this.#quantity}, Profit: ${this.getProfit()}`;
    }

}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "female");
let book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, 20, 5000);


// console.log(book1.title)
// console.log(book1.price)
// console.log(book1.author.name)
// console.log(book1.quantity)

console.log(author1.gender)
console.log(author1.name)
console.log(author1.toString())
author1.name = "Joe"

