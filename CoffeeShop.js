class CoffeeShop {
    #menu
    constructor (name , menu) {
        this.name = name
        this.#menu = menu
        this.orders = []
    }
    addOrder(itemName){
        const item = this.#menu.find(({name}) => name === itemName)
        if(item){
            this.orders.push(itemName)
            return "Order added"
        } else {
            return "This item is currently unavailable!"
        }
    }
    listOrders(){
        return this.orders
    }
    dueAmount(){
        return this.orders.reduce((sum , itemName) => {
            const item = this.#menu.find(({name}) => name === itemName)
            return item ? sum + item.price : sum
        },0)
    }
    drinkOnly(){
        return this.#menu
        .filter(({type}) => type === 'drink')
        .map(({name}) => name)
    }
    foodOnly(){
        return this.#menu
        .filter(({type}) => type === 'food')
        .map(({name}) => name)
    }
    fullfillOrder(){
        if(this.orders.length > 0){
            const itemName = this.orders.shift()
            return `${itemName} is ready!`
        }
        else return "All orders have been fulfilled!"
    }
    cheapestItem (){
        if(this.#menu.length ===0) return "No item in menu"

        const cheapest = this.#menu.reduce((cheapest, {price , name}) => {
            return price < cheapest.price ? {price , name} : cheapest
        })
            return cheapest.name
    }
}


const menu = [
    { name: "tuna sandwich", type: "food", price: 5.00 },
    { name: "ham and cheese sandwich", type: "food", price: 4.50 },
    { name: "bacon and egg", type: "food", price: 6.00 },
    { name: "steak", type: "food", price: 12.00 },
    { name: "hamburger", type: "food", price: 8.00 },
    { name: "cinnamon roll", type: "food", price: 2.50 },
    { name: "orange juice", type: "drink", price: 3.00 },
    { name: "lemonade", type: "drink", price: 2.00 },
    { name: "cranberry juice", type: "drink", price: 3.50 },
    { name: "pineapple juice", type: "drink", price: 3.00 },
    { name: "lemon iced tea", type: "drink", price: 2.50 },
    { name: "vanilla chai latte", type: "drink", price: 4.00 },
    { name: "hot chocolate", type: "drink", price: 3.50 },
    { name: "iced coffee", type: "drink", price: 4.50 }
];


const tcs = new CoffeeShop("The Coffee Shop", menu)

tcs.addOrder("cranberry juice")
tcs.addOrder("lemonade")
console.log(tcs.fullfillOrder())
console.log(tcs.cheapestItem())
console.log(tcs.drinkOnly())