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