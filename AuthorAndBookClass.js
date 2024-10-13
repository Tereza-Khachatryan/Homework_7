class Author {
    _name
    _email
    _gender
    constructor (name, email ,gender){
        this._name = name
        this._email = email
        this._gender = gender

}
    get name (){
        return this._name
    }
    get gender (){
        return this._gender
    }

    get email(){
        return this._email
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
        return this._gender === "male" ? `Mr. ${this._name}` : `Ms. ${this._name}`
    }
}

let newName = "New Name"
let newEmail = "newEmail@gmail.com"
let newgender = "NewGender"

class Book {
    _title
    _author
    _quantity
    _price
    constructor (title, author, price, quantity){
        this._title = title 
        this._author = author
        this._price = price
        this._quantity = quantity
    }

    get title (){
        return this._title
    }

    get price (){
        return this._price
    }

    get author (){
        return this._author
    }

    get quantity (){
        return this._quantity
    }

    getProfit() {
        return this._price * this._quantity
    }

    toString() {
        return `Book Title: ${this._title}, Author: ${this._author.toString()}, Price: $${this._price}, Quantity: ${this._quantity}, Profit: ${this.getProfit()}`;
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

