const ORDER_NAME = "order-" + new Date().toDateString().replaceAll(" ", "") 

const addItem = (item: string, price: number, amount: number) => {
    createOrder() 
    let order = JSON.parse(localStorage.getItem(ORDER_NAME)!)

    if(order[item]){
        order[item].price = price
        order[item].amount = amount
    } else{
        order[item] = { price: price, amount: amount }
    }

    localStorage.setItem(ORDER_NAME, JSON.stringify(order))
}

const getItem = (item: string) => {
    createOrder()
    let order = JSON.parse(localStorage.getItem(ORDER_NAME)!)
    return order[item] ? order[item] : null
}

// Creates a new order if there isn't one at this day
const createOrder = () => {
    let order = JSON.parse(localStorage.getItem(ORDER_NAME)!)
    if(!order) localStorage.setItem(ORDER_NAME, JSON.stringify({}))
}

// eslint-disable-next-line
export default {
    addItem,
    getItem
}