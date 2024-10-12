class Account {
    #id
    #name
    #balance
    static instanceCount = 0
    constructor ( name , balance){
        Account.instanceCount++
        this.#id = Account.instanceCount
        this.#name = name 
        this.#balance = balance
    }

    get name (){
        return this.#name
    }

    get id(){
        return this.#id
    }

    get balance (){
        return this.#balance
    }

    set name (NewName){
        throw new Error ("Can not change the name")
    }

    set balance(newBalance){
        throw new Error ("Can not change the balance")
    }

    credit(amount){
        return this.#balance += amount
    }

    debit (amount){
        if(this.#balance < amount) return "Amount exceeds balance"
        this.#balance -= amount
        return this.#balance
    }
    transferTo(anotherAccount, amount) {
        if (this.#balance < amount) return "Amount exceeded balance"
        this.debit(amount)
        anotherAccount.credit(amount)
        return this.#balance
      }

    toString(){
        return `${this.#name}'s balance is ${this.#balance} AMD`
      }

    static identifyAccounts(accountFirst , accountSecond){
        if (!(accountFirst instanceof Account) || !(accountSecond instanceof Account)){
            throw new Error ("Arguments must be instance of Account")
        }
        return (accountFirst.name === accountSecond.name 
            && accountFirst.id === accountSecond.if && 
            accountFirst.balance === accountSecond.#balance
        )
    }
}

const savingAcc = new Account("Saving account", 2000)
const cardAcc = new Account("Card account", 1000)



console.log(Account.identifyAccounts(cardAcc, savingAcc))
