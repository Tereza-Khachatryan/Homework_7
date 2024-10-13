class Book {
    #title
    #author
    constructor(title , author){
        this.#title = title
        this.#author = author
    }
    get title (){
        return this.#title
    }
    get author (){
        return this.#author
    }
    toString(){
        return `${this.#title} by ${this.#author}`
    }
    isTheSameBook(book){
       const {title , author} = book
        return this.#title === title && this.#author === author
    }
}

class LibraryBookBase extends Book {
    #bookId
    constructor(title , author , bookId){
        super(title , author)
        this.#bookId = bookId
    }
    get bookId (){
        return this.#bookId
    }
    toString(){
        return `${this.title}'s id is ${this.#bookId} , author: ${this.author}`
    }
}

class LibraryBook extends LibraryBookBase {
    #quantity
    constructor(title , author , bookId , quantity){
        super(title , author , bookId)
        this.#quantity = quantity
    }
    get quantity (){
        return this.#quantity
    }
    toString(){
        return `Title: ${this.title} , author: ${this.author} ,bookId :${this.bookId} , quantity: ${this.#quantity} `
    }
    increaseQuantityBy(amount){
        return this.#quantity += amount
    }
    decreaseQuantityBy(amount){
        return this.#quantity -= amount
    }
}

class ReaderBook extends LibraryBookBase {
    #expirationDate
    #isReturned
    constructor(title , author , bookId ,expirationDate ,isReturned){
        super(title , author , bookId)
        this.#expirationDate = expirationDate
        this.#isReturned = isReturned
    }
    get isReturned (){
        return this.#isReturned
    }
    get expirationDate(){
        return this.#expirationDate
    }
    toString (){
        const returned = this.#isReturned ? "Returned" : "Not returned"
        return  ` ${this.title}'s expiration Date is ${this.#expirationDate} ,author: ${this.author}.BookID:${this.bookId}, The book is ${returned}`
    }
}