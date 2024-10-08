class Shiritory {
    constructor(){
        this.words = []
        this.game_over = false
    }
    play (str) {
        if(this.words.length === 0){
             this.words.push(str)
             return this.words
        }
        if(this.words.includes(str) || this.words.length === 0){
            this.game_over = true
            return "Game is over! This word has already been used"
        }
        if(this.words[this.words.length -1].slice(-1) === str[0].toLowerCase()){
            this.words.push(str)
            return this.words
        } else {
            this.game_over = true
            return "Game over! The word must start with the last letter of the previous word"
        }
    }
    restart (){
         this.words.length = 0
         this.game_over = false
         return "Game restarted"
    }
}

let myShiritori = new Shiritory();


console.log(myShiritori.play("apple"))
console.log(myShiritori.play("Ear"))
console.log(myShiritori.play("rhino"))
console.log(myShiritori.play("corn"))
console.log(myShiritori.restart())
console.log(myShiritori.words)
console.log(myShiritori.play("hostess"))
console.log(myShiritori.play("stash"))
console.log(myShiritori.play("hostess"))

