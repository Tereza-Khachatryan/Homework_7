class Book {
    _title
    _author
    constructor(title , author){
        this._title = title
        this._author = author
    }
    get title (){
        return this._title
    }
    get author (){
        return this._author
    }
    toString(){
        return `${this._title} by ${this._author}`
    }
    isTheSameBook(book){
       const {title , author} = book
        return this._title === title && this._author === author
    }
}

class LibraryBookBase extends Book {
    _bookId
    constructor(title , author , bookId){
        super(title , author)
        this._bookId = bookId
    }
    get bookId (){
        return this._bookId
    }
    toString(){
        return `${this.title}'s id is ${this._bookId} , author: ${this.author}`
    }
}

class LibraryBook extends LibraryBookBase {
    _quantity
    constructor(title , author , bookId , quantity){
        super(title , author , bookId)
        this._quantity = quantity
    }
    get quantity (){
        return this._quantity
    }
    toString(){
        return `Title: ${this.title} , author: ${this.author} ,bookId :${this.bookId} , quantity: ${this.#quantity} `
    }
    increaseQuantityBy(amount){
        return this._quantity += amount
    }
    decreaseQuantityBy(amount){
        return this._quantity -= amount
    }
}

class ReaderBook extends LibraryBookBase {
    _expirationDate
    _isReturned
    constructor(title , author , bookId ,expirationDate ,isReturned){
        super(title , author , bookId)
        this._expirationDate = expirationDate
        this._isReturned = isReturned
    }
    get isReturned (){
        return this._isReturned
    }
    get expirationDate(){
        return this._expirationDate
    }
    toString (){
        const returned = this._isReturned ? "Returned" : "Not returned"
        return  ` ${this.title}'s expiration Date is ${this._expirationDate} ,author: ${this.author}.BookID:${this.bookId}, The book is ${returned}`
    }
}

class Reader {
    _firstName
    _lastName
    _readerId
    _books
    constructor(firstName , lastName , readerId , books = []){
        this._firstName = firstName
        this._lastName = lastName
        this._readerId = readerId
        this._books = books
    }
    get firstName (){
        return this._firstName
    }
    get lastName (){
        return this._lastName
    }
    get readerId(){
        return this._readerId
    }
    get books (){
        return this._books
    }
    toString(){
        const bookList = this._books.length > 0 ? this._books.map(book => book.toString()).join(', ') :
        "No books borrowed"
        return `Name: ${this._firstName}, lastName: ${this.lastName}, readerId: ${this._readerId}, books: ${bookList}`

    }

    borrowBook(book, library) {
        if (book instanceof LibraryBook && library instanceof Library) {
            const availableBook = library.books.find(b => b.isTheSameBook(book) && b.quantity > 0)
            if (availableBook) {
                return library.lendBook(availableBook, this._readerId)
            } else {
                return "Book is not available.";
            }
        } else {
            return "Invalid book or library.";
        }
    }
}

class Library {
    _books
    _readers
    constructor(books = [], readers = []){
        this._books = books
        this._readers = readers
    }
    get books (){
        return this._books
    }
    get readers (){
        return this._readers
    }
    doHaveBook (requestedBook){
        return this._books.some(
            (book)=> book.isTheSameBook(requestedBook) && book.quantity > 0)
    }
    addBook(newBook){
        const existingBook = this._books.find((book) => book.isTheSameBook(newBook))
        if(existingBook){
            existingBook.increaseQuantityBy(1)
        } else {
            this._books.push(newBook)
        }
        return this._books
    }
    addBooks(newBooks){
        newBooks.forEach((book) => this.addBook(book))
        return this._books
    }
    checkReaderId(readerId){
        return this._readers.some((reader) => reader.readerId === readerId)
    }

    lendBook(book, readerId) {
        const reader = this._readers.find(reader => reader.readerId === readerId);
        if (!reader) {
            console.log("Reader not found.")
            return null;
        }
    
        if (!this.doHaveBook(book)) {
            console.log("Book not available.")
            return null;
        }
    
        const readerBook = new ReaderBook(
            book.title,
            book.author,
            book.bookId,
            "2024-10-10",
            false
        )
    
        reader.books.push(readerBook);
        book.decreaseQuantityBy(1);
        return readerBook;
    }
}
