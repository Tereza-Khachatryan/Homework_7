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

class Reader {
    #firstName
    #lastName
    #readerId
    #books
    constructor(firstName , lastName , readerId , books = []){
        this.#firstName = firstName
        this.#lastName = lastName
        this.#readerId = readerId
        this.#books = books
    }
    get firstName (){
        return this.#firstName
    }
    get lastName (){
        return this.#lastName
    }
    get readerId(){
        return this.#readerId
    }
    get books (){
        return this.#books
    }
    toString(){
        const bookList = this.#books.length > 0 ? this.#books.map(book => book.toString()).join(', ') :
        "No books borrowed"
        return `Name: ${this.#firstName}, lastName: ${this.lastName}, readerId: ${this.#readerId}, books: ${bookList}`

    }

    borrowBook(book, library) {
        if (book instanceof LibraryBook && library instanceof Library) {
            const availableBook = library.books.find(b => b.isTheSameBook(book) && b.quantity > 0)
            if (availableBook) {
                return library.lendBook(availableBook, this.#readerId)
            } else {
                return "Book is not available.";
            }
        } else {
            return "Invalid book or library.";
        }
    }
}

class Library {
    #books
    #readers
    constructor(books = [], readers = []){
        this.#books = books
        this.#readers = readers
    }
    get books (){
        return this.#books
    }
    get readers (){
        return this.#readers
    }
    doHaveBook (requestedBook){
        return this.#books.some(
            (book)=> book.isTheSameBook(requestedBook) && book.quantity > 0)
    }
    addBook(newBook){
        const existingBook = this.#books.find((book) => book.isTheSameBook(newBook))
        if(existingBook){
            existingBook.increaseQuantityBy(1)
        } else {
            this.#books.push(newBook)
        }
        return this.#books
    }
    addBooks(newBooks){
        newBooks.forEach((book) => this.addBook(book))
        return this.#books
    }
    checkReaderId(readerId){
        return this.#readers.some((reader) => reader.readerId === readerId)
    }

    lendBook(book, readerId) {
        const reader = this.#readers.find(reader => reader.readerId === readerId);
        if (!reader) {
            console.log("Reader not found.");
            return null;
        }
    
        if (!this.doHaveBook(book)) {
            console.log("Book not available.");
            return null;
        }
    
        const readerBook = new ReaderBook(
            book.title,
            book.author,
            book.bookId,
            "2024-10-10",
            false
        );
    
        reader.books.push(readerBook);
        book.decreaseQuantityBy(1);
        return readerBook;
    }
}
