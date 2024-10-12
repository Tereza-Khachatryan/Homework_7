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
    
}

let savingAcc = new Account("Saving account", 2000)

console.log(savingAcc.balance)
