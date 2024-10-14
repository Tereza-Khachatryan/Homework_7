class Shiritory {
    #words
    _game_over
    constructor(){
        this.#words = []
        this._game_over = false
    }

    get game_over (){
        return this._game_over
    }

    play (str) {
        const gameStatus = this._game_over ? "Game over": this.#addWord(str)
        return gameStatus
    }
    #addWord(str){
        this.#words.push(str)
        return this.#checkGameOver(str)
    }

    #checkGameOver (str){
        const lastWord = this.#words[this.#words.length - 2]
        this._game_over = this.#words.length > 1 && lastWord.slice(-1) !== str[0].toLowerCase()
        return this._game_over ? "Game over!" : this.#words
    }
       
    restart (){
         this.#words.length = 0
         this._game_over = false
         return "Game restarted"
    }
}

let myShiritori = new Shiritory()

console.log(myShiritori.play("apple"))
console.log(myShiritori.play("elephant"))
console.log(myShiritori.play("tiger"))
console.log(myShiritori.play("rat"))
console.log(myShiritori.play("cat"))
console.log(myShiritori.restart())       
console.log(myShiritori.play("hostess"))

